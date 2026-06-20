document.addEventListener('DOMContentLoaded', function() {
    // Variáveis globais
    let supabase = null;
    let categories = [];
    let dishes = [];
    let currentFilter = 'todos';
    let editingId = null;

    // Elementos DOM
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const searchInput = document.getElementById('searchInput');
    const menuGrid = document.getElementById('menuGrid');
    const backToTop = document.getElementById('backToTop');
    const shareBtn = document.getElementById('shareBtn');
    const adminBtn = document.getElementById('adminBtn');
    const adminModal = document.getElementById('adminModal');
    const closeAdmin = document.getElementById('closeAdmin');
    const addDishForm = document.getElementById('addDishForm');
    const editList = document.getElementById('editList');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const dishImageUpload = document.getElementById('dishImageUpload');
    const dishImageInput = document.getElementById('dishImage');
    const imagePreview = document.getElementById('imagePreview');
    const dishCategorySelect = document.getElementById('dishCategory');
    const categoryForm = document.getElementById('categoryForm');
    const categoryList = document.getElementById('categoryList');
    const supabaseSetupModal = document.getElementById('supabaseSetup');
    const supabaseForm = document.getElementById('supabaseForm');

    let uploadedImageBase64 = '';

    // ------------------------------
    // CONFIGURAÇÃO DO SUPABASE
    // ------------------------------
    
    // Verificar se já temos credenciais salvas
    function checkSupabaseConfig() {
        const savedUrl = localStorage.getItem('supabaseUrl');
        const savedKey = localStorage.getItem('supabaseKey');
        
        if (savedUrl && savedKey) {
            initSupabase(savedUrl, savedKey);
            supabaseSetupModal.classList.remove('active');
        } else {
            supabaseSetupModal.classList.add('active');
        }
    }

    // Inicializar Supabase
    function initSupabase(url, key) {
        supabase = window.supabase.createClient(url, key);
        loadData();
    }

    // Evento do formulário de configuração
    supabaseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const url = document.getElementById('supabaseUrl').value.trim();
        const key = document.getElementById('supabaseKey').value.trim();
        
        if (url && key) {
            localStorage.setItem('supabaseUrl', url);
            localStorage.setItem('supabaseKey', key);
            initSupabase(url, key);
            supabaseSetupModal.classList.remove('active');
        }
    });

    // ------------------------------
    // FUNÇÕES DO SUPABASE
    // ------------------------------

    // Carregar todos os dados
    async function loadData() {
        try {
            // Carregar categorias
            const { data: catData, error: catError } = await supabase
                .from('categories')
                .select('*')
                .order('name');
            
            if (catError) throw catError;
            categories = catData || [];
            
            // Carregar pratos
            const { data: dishData, error: dishError } = await supabase
                .from('dishes')
                .select('*')
                .order('name');
            
            if (dishError) throw dishError;
            dishes = dishData || [];
            
            // Renderizar tudo
            renderAll();
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
            alert('Erro ao carregar dados. Verifique suas credenciais do Supabase.');
        }
    }

    // Adicionar categoria
    async function addCategory(name) {
        const id = name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
        const { error } = await supabase
            .from('categories')
            .insert([{ id, name }]);
        
        if (error) throw error;
        await loadData();
    }

    // Atualizar categoria
    async function updateCategory(id, name) {
        const { error } = await supabase
            .from('categories')
            .update({ name })
            .eq('id', id);
        
        if (error) throw error;
        await loadData();
    }

    // Remover categoria
    async function deleteCategory(id) {
        const { error } = await supabase
            .from('categories')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        await loadData();
    }

    // Adicionar prato
    async function addDish(dishData) {
        const { error } = await supabase
            .from('dishes')
            .insert([dishData]);
        
        if (error) throw error;
        await loadData();
    }

    // Atualizar prato
    async function updateDish(id, dishData) {
        const { error } = await supabase
            .from('dishes')
            .update(dishData)
            .eq('id', id);
        
        if (error) throw error;
        await loadData();
    }

    // Remover prato
    async function deleteDish(id) {
        const { error } = await supabase
            .from('dishes')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        await loadData();
    }

    // ------------------------------
    // FUNÇÕES DE RENDERIZAÇÃO
    // ------------------------------

    function renderAll() {
        renderCategorySelect();
        renderFilterButtons();
        renderMenu();
        renderEditList();
        renderCategoryList();
    }

    function renderCategorySelect() {
        dishCategorySelect.innerHTML = categories.map(cat => 
            `<option value="${cat.id}">${cat.name}</option>`
        ).join('');
    }

    function renderFilterButtons() {
        const filterContainer = document.querySelector('.category-filters');
        filterContainer.innerHTML = `
            <button class="filter-btn active" data-category="todos">Todos</button>
            ${categories.map(cat => 
                `<button class="filter-btn" data-category="${cat.id}">${cat.name}</button>`
            ).join('')}
        `;
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                currentFilter = this.getAttribute('data-category');
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                renderMenu();
            });
        });
    }

    function renderMenu() {
        menuGrid.innerHTML = '';
        const searchTerm = searchInput.value.toLowerCase();
        
        const filteredDishes = dishes.filter(dish => {
            const matchesSearch = dish.name.toLowerCase().includes(searchTerm) || 
                                   dish.description.toLowerCase().includes(searchTerm);
            const matchesCategory = currentFilter === 'todos' || dish.category_id === currentFilter;
            return matchesSearch && matchesCategory;
        });

        filteredDishes.forEach(dish => {
            const dishElement = document.createElement('div');
            dishElement.className = `menu-item ${dish.hot ? 'badge-hot' : ''}`;
            dishElement.dataset.category = dish.category_id;
            
            let badgeHTML = '';
            if (dish.hot) badgeHTML = '<span class="badge badge-hot">🔥 Mais Vendido</span>';
            if (dish.popular) badgeHTML = '<span class="badge badge-popular">⭐ Popular</span>';
            
            dishElement.innerHTML = `
                <img src="${dish.image || 'https://via.placeholder.com/300x200?text=Sem+Foto'}" alt="${dish.name}">
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h4>${dish.name}</h4>
                        <span class="price">${dish.price}</span>
                    </div>
                    <p>${dish.description}</p>
                    ${badgeHTML}
                </div>
            `;
            menuGrid.appendChild(dishElement);
        });

        const items = menuGrid.querySelectorAll('.menu-item');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            setTimeout(() => {
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    function renderEditList() {
        editList.innerHTML = '';
        dishes.forEach(dish => {
            const category = categories.find(c => c.id === dish.category_id);
            const item = document.createElement('div');
            item.className = 'edit-item';
            item.innerHTML = `
                <div class="edit-item-info">
                    <h4>${dish.name}</h4>
                    <p>${category ? category.name : dish.category_id} - ${dish.price}</p>
                </div>
                <div class="edit-buttons">
                    <button class="edit-btn" data-id="${dish.id}">Editar</button>
                    <button class="delete-btn" data-id="${dish.id}">Remover</button>
                </div>
            `;
            editList.appendChild(item);
        });

        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', () => editDish(parseInt(btn.dataset.id)));
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                if (confirm('Tem certeza que deseja remover este prato?')) {
                    try {
                        await deleteDish(parseInt(btn.dataset.id));
                    } catch (error) {
                        console.error('Erro:', error);
                        alert('Erro ao remover prato');
                    }
                }
            });
        });
    }

    async function editDish(id) {
        editingId = id;
        const dish = dishes.find(d => d.id === id);
        
        document.getElementById('dishName').value = dish.name;
        document.getElementById('dishPrice').value = dish.price;
        document.getElementById('dishDesc').value = dish.description;
        document.getElementById('dishCategory').value = dish.category_id;
        document.getElementById('dishImage').value = dish.image || '';
        document.getElementById('dishHot').checked = dish.hot;
        document.getElementById('dishPopular').checked = dish.popular;
        
        uploadedImageBase64 = dish.image || '';
        if (dish.image) {
            showImagePreview(dish.image);
        } else {
            imagePreview.innerHTML = '';
        }
        
        addDishForm.querySelector('button[type="submit"]').textContent = 'Salvar Alterações';
        switchTab('add');
    }

    function renderCategoryList() {
        categoryList.innerHTML = categories.map(cat => {
            const dishCount = dishes.filter(d => d.category_id === cat.id).length;
            return `
                <div class="category-item">
                    <input type="text" class="category-input" data-id="${cat.id}" value="${cat.name}" placeholder="Nome da categoria">
                    <span style="color: #666; font-size: 0.9rem;">(${dishCount} pratos)</span>
                    <div class="edit-buttons">
                        <button class="save-btn" data-id="${cat.id}">Salvar</button>
                        <button class="delete-btn" data-id="${cat.id}">Remover</button>
                    </div>
                </div>
            `;
        }).join('');

        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.dataset.id;
                const input = document.querySelector(`.category-input[data-id="${id}"]`);
                const newName = input.value.trim();
                if (newName) {
                    try {
                        await updateCategory(id, newName);
                        alert('Categoria atualizada!');
                    } catch (error) {
                        console.error('Erro:', error);
                        alert('Erro ao atualizar categoria');
                    }
                }
            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.dataset.id;
                const dishCount = dishes.filter(d => d.category_id === id).length;
                
                if (dishCount > 0) {
                    alert(`Não é possível remover. Esta categoria tem ${dishCount} prato(s). Mova os pratos para outra categoria primeiro.`);
                    return;
                }
                
                if (confirm('Tem certeza que deseja remover esta categoria?')) {
                    try {
                        await deleteCategory(id);
                    } catch (error) {
                        console.error('Erro:', error);
                        alert('Erro ao remover categoria');
                    }
                }
            });
        });
    }

    function switchTab(tabName) {
        tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });
        tabContents.forEach(content => {
            content.classList.toggle('active', content.id === tabName + 'Tab');
        });
    }

    function resetForm() {
        addDishForm.reset();
        editingId = null;
        uploadedImageBase64 = '';
        imagePreview.innerHTML = '';
        addDishForm.querySelector('button[type="submit"]').textContent = 'Adicionar Prato';
    }

    function showImagePreview(imageSrc) {
        imagePreview.innerHTML = `<img src="${imageSrc}" alt="Preview">`;
    }

    dishImageUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                uploadedImageBase64 = event.target.result;
                showImagePreview(uploadedImageBase64);
            };
            reader.readAsDataURL(file);
        }
    });

    addDishForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const finalImage = uploadedImageBase64 || document.getElementById('dishImage').value;
        
        const dishData = {
            name: document.getElementById('dishName').value,
            price: document.getElementById('dishPrice').value,
            description: document.getElementById('dishDesc').value,
            category_id: document.getElementById('dishCategory').value,
            image: finalImage,
            hot: document.getElementById('dishHot').checked,
            popular: document.getElementById('dishPopular').checked
        };

        try {
            if (editingId) {
                await updateDish(editingId, dishData);
                alert('Prato atualizado com sucesso!');
            } else {
                await addDish(dishData);
                alert('Prato adicionado com sucesso!');
            }
            renderEditList();
            resetForm();
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao salvar prato');
        }
    });

    categoryForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('categoryName');
        const name = nameInput.value.trim();
        
        if (name) {
            try {
                await addCategory(name);
                nameInput.value = '';
                alert('Categoria adicionada!');
            } catch (error) {
                console.error('Erro:', error);
                if (error.message.includes('duplicate')) {
                    alert('Esta categoria já existe!');
                } else {
                    alert('Erro ao adicionar categoria');
                }
            }
        }
    });

    adminBtn.addEventListener('click', () => {
        adminModal.classList.add('active');
        renderEditList();
        renderCategoryList();
        renderCategorySelect();
    });

    closeAdmin.addEventListener('click', () => {
        adminModal.classList.remove('active');
        resetForm();
    });

    adminModal.addEventListener('click', (e) => {
        if (e.target === adminModal) {
            adminModal.classList.remove('active');
            resetForm();
        }
    });

    searchInput.addEventListener('input', () => {
        renderMenu();
    });

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            navMenu.classList.remove('active');
            navToggle.classList.toggle('active');
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'Restaurante Mar & Sol - Cardápio Digital',
                text: 'Confira o cardápio digital do Restaurante Mar & Sol!',
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copiado para a área de transferência!');
        }
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    header.style.transition = 'transform 0.3s ease';

    // Inicializar
    checkSupabaseConfig();
});