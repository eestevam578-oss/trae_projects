document.addEventListener('DOMContentLoaded', function() {
    // Variáveis globais
    let supabase = null;
    let useSupabase = false;
    let categories = [];
    let dishes = [];
    let currentFilter = 'todos';
    let editingId = null;

    // Dados iniciais para fallback
    const initialCategories = [
        { id: 'entradas', name: 'Entradas' },
        { id: 'porcoes', name: 'Porções' },
        { id: 'principais', name: 'Pratos Principais' },
        { id: 'frutosdomar', name: 'Frutos do Mar' },
        { id: 'bebidas', name: 'Bebidas' },
        { id: 'sobremesas', name: 'Sobremesas' }
    ];

    const initialDishes = [
        { id: 1, name: 'Calamares Fritos', price: 'R$ 34,90', description: 'Anéis de lula crocantes, servidos com molho tártaro e limão siciliano.', category_id: 'entradas', hot: false, popular: false, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=fried%20calamari%20appetizer%20with%20lemon%20and%20sauce&image_size=square' },
        { id: 2, name: 'Camarão ao Cocktail', price: 'R$ 42,90', description: 'Camarões grandes cozidos, servidos com molho cocktail de maracujá.', category_id: 'entradas', hot: false, popular: true, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=shrimp%20cocktail%20with%20avocado%20and%20tomato&image_size=square' },
        { id: 3, name: 'Peixe Grelhado', price: 'R$ 69,90', description: 'Filé de corvina grelhado, arroz, salada e purê de batata.', category_id: 'principais', hot: true, popular: false, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=grilled%20fish%20with%20vegetables%20and%20rice&image_size=square' }
    ];

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
    
    function checkSupabaseConfig() {
        const savedUrl = localStorage.getItem('supabaseUrl');
        const savedKey = localStorage.getItem('supabaseKey');
        
        if (savedUrl && savedKey) {
            try {
                supabase = window.supabase.createClient(savedUrl, savedKey);
                useSupabase = true;
                loadData();
                supabaseSetupModal.classList.remove('active');
            } catch (error) {
                console.error('Erro ao configurar Supabase:', error);
                useSupabase = false;
                loadLocalData();
                supabaseSetupModal.classList.remove('active');
            }
        } else {
            useSupabase = false;
            loadLocalData();
            supabaseSetupModal.classList.add('active');
        }
    }

    // Evento do formulário de configuração
    supabaseForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const url = document.getElementById('supabaseUrl').value.trim();
        const key = document.getElementById('supabaseKey').value.trim();
        
        if (url && key) {
            try {
                supabase = window.supabase.createClient(url, key);
                localStorage.setItem('supabaseUrl', url);
                localStorage.setItem('supabaseKey', key);
                useSupabase = true;
                await loadData();
                supabaseSetupModal.classList.remove('active');
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao conectar ao Supabase. Verifique as credenciais.');
            }
        }
    });

    // ------------------------------
    // FUNÇÕES DE DADOS
    // ------------------------------

    async function loadData() {
        if (useSupabase) {
            try {
                // Carregar categorias
                const { data: catData, error: catError } = await supabase
                    .from('categories')
                    .select('*')
                    .order('name');
                
                if (catError) {
                    console.error('Erro categorias:', catError);
                    categories = [...initialCategories];
                } else {
                    categories = catData && catData.length > 0 ? catData : [...initialCategories];
                }
                
                // Carregar pratos
                const { data: dishData, error: dishError } = await supabase
                    .from('dishes')
                    .select('*')
                    .order('name');
                
                if (dishError) {
                    console.error('Erro pratos:', dishError);
                    dishes = [...initialDishes];
                } else {
                    dishes = dishData && dishData.length > 0 ? dishData : [...initialDishes];
                }
                
                renderAll();
            } catch (error) {
                console.error('Erro geral:', error);
                loadLocalData();
            }
        } else {
            loadLocalData();
        }
    }

    function loadLocalData() {
        const localCategories = localStorage.getItem('localCategories');
        const localDishes = localStorage.getItem('localDishes');
        
        categories = localCategories ? JSON.parse(localCategories) : [...initialCategories];
        dishes = localDishes ? JSON.parse(localDishes) : [...initialDishes];
        
        renderAll();
    }

    function saveLocalData() {
        localStorage.setItem('localCategories', JSON.stringify(categories));
        localStorage.setItem('localDishes', JSON.stringify(dishes));
    }

    function generateId() {
        return Date.now() + Math.floor(Math.random() * 1000);
    }

    // ------------------------------
    // FUNÇÕES DE CATEGORIA
    // ------------------------------

    async function addCategory(name) {
        const id = name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
        
        if (useSupabase) {
            const { error } = await supabase
                .from('categories')
                .insert([{ id, name }]);
            
            if (error) throw error;
        } else {
            categories.push({ id, name });
            saveLocalData();
        }
        await loadData();
    }

    async function updateCategory(id, name) {
        if (useSupabase) {
            const { error } = await supabase
                .from('categories')
                .update({ name })
                .eq('id', id);
            
            if (error) throw error;
        } else {
            const cat = categories.find(c => c.id === id);
            if (cat) {
                cat.name = name;
                saveLocalData();
            }
        }
        await loadData();
    }

    async function deleteCategory(id) {
        const dishCount = dishes.filter(d => d.category_id === id).length;
        if (dishCount > 0) {
            alert('Não é possível remover. Esta categoria tem pratos!');
            return;
        }

        if (useSupabase) {
            const { error } = await supabase
                .from('categories')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
        } else {
            categories = categories.filter(c => c.id !== id);
            saveLocalData();
        }
        await loadData();
    }

    // ------------------------------
    // FUNÇÕES DE PRATOS
    // ------------------------------

    async function addDish(dishData) {
        if (useSupabase) {
            const { error } = await supabase
                .from('dishes')
                .insert([dishData]);
            
            if (error) throw error;
        } else {
            dishData.id = generateId();
            dishes.push(dishData);
            saveLocalData();
        }
        await loadData();
    }

    async function updateDish(id, dishData) {
        if (useSupabase) {
            const { error } = await supabase
                .from('dishes')
                .update(dishData)
                .eq('id', id);
            
            if (error) throw error;
        } else {
            const index = dishes.findIndex(d => d.id === id);
            if (index !== -1) {
                dishes[index] = { ...dishData, id };
                saveLocalData();
            }
        }
        await loadData();
    }

    async function deleteDish(id) {
        if (useSupabase) {
            const { error } = await supabase
                .from('dishes')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
        } else {
            dishes = dishes.filter(d => d.id !== id);
            saveLocalData();
        }
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
        const searchTerm = (searchInput.value || '').toLowerCase();
        
        const filteredDishes = dishes.filter(dish => {
            const matchesSearch = !searchTerm || 
                (dish.name && dish.name.toLowerCase().includes(searchTerm)) || 
                (dish.description && dish.description.toLowerCase().includes(searchTerm));
            const matchesCategory = currentFilter === 'todos' || dish.category_id === currentFilter;
            return matchesSearch && matchesCategory;
        });

        filteredDishes.forEach((dish, index) => {
            const dishElement = document.createElement('div');
            dishElement.className = `menu-item ${dish.hot ? 'badge-hot' : ''}`;
            dishElement.style.opacity = '0';
            dishElement.style.transform = 'translateY(30px)';
            
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
            
            setTimeout(() => {
                dishElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                dishElement.style.opacity = '1';
                dishElement.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    function renderEditList() {
        editList.innerHTML = '';
        
        if (dishes.length === 0) {
            editList.innerHTML = '<p style="text-align: center; color: #666;">Nenhum prato encontrado.</p>';
            return;
        }
        
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
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id) || btn.dataset.id;
                editDish(id);
            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                if (confirm('Tem certeza que deseja remover este prato?')) {
                    try {
                        const id = parseInt(btn.dataset.id) || btn.dataset.id;
                        await deleteDish(id);
                    } catch (error) {
                        console.error('Erro:', error);
                        alert('Erro ao remover prato');
                    }
                }
            });
        });
    }

    function editDish(id) {
        editingId = id;
        const dish = dishes.find(d => d.id === id);
        
        if (!dish) {
            alert('Prato não encontrado!');
            return;
        }
        
        document.getElementById('dishName').value = dish.name || '';
        document.getElementById('dishPrice').value = dish.price || '';
        document.getElementById('dishDesc').value = dish.description || '';
        document.getElementById('dishCategory').value = dish.category_id || '';
        document.getElementById('dishImage').value = dish.image || '';
        document.getElementById('dishHot').checked = dish.hot || false;
        document.getElementById('dishPopular').checked = dish.popular || false;
        
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
        categoryList.innerHTML = '';
        
        categories.forEach(cat => {
            const dishCount = dishes.filter(d => d.category_id === cat.id).length;
            const item = document.createElement('div');
            item.className = 'category-item';
            item.innerHTML = `
                <input type="text" class="category-input" data-id="${cat.id}" value="${cat.name}" placeholder="Nome da categoria">
                <span style="color: #666; font-size: 0.9rem;">(${dishCount} pratos)</span>
                <div class="edit-buttons">
                    <button class="save-btn" data-id="${cat.id}">Salvar</button>
                    <button class="delete-btn" data-id="${cat.id}">Remover</button>
                </div>
            `;
            categoryList.appendChild(item);
        });

        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.dataset.id;
                const input = document.querySelector(`.category-input[data-id="${id}"]`);
                const newName = input.value.trim();
                if (newName) {
                    try {
                        await updateCategory(id, newName);
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
                if (confirm('Tem certeza que deseja remover esta categoria?')) {
                    try {
                        await deleteCategory(id);
                    } catch (error) {
                        console.error('Erro:', error);
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
            resetForm();
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao salvar prato: ' + error.message);
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
                alert('Erro ao adicionar categoria');
            }
        }
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    adminBtn.addEventListener('click', () => {
        adminModal.classList.add('active');
        renderEditList();
        renderCategoryList();
        renderCategorySelect();
    });

    document.getElementById('reconfigureSupabase').addEventListener('click', () => {
        adminModal.classList.remove('active');
        supabaseSetupModal.classList.add('active');
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

    checkSupabaseConfig();
});
