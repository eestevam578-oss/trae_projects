document.addEventListener('DOMContentLoaded', function() {
    // Dados iniciais de categorias
    const initialCategories = [
        { id: 'entradas', name: 'Entradas' },
        { id: 'porcoes', name: 'Porções' },
        { id: 'principais', name: 'Pratos Principais' },
        { id: 'frutosdomar', name: 'Frutos do Mar' },
        { id: 'bebidas', name: 'Bebidas' },
        { id: 'sobremesas', name: 'Sobremesas' }
    ];

    // Dados iniciais do cardápio
    const initialDishes = [
        {
            id: 1,
            name: 'Calamares Fritos',
            price: 'R$ 34,90',
            description: 'Anéis de lula crocantes, servidos com molho tártaro e limão siciliano.',
            category: 'entradas',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=fried%20calamari%20appetizer%20with%20lemon%20and%20sauce&image_size=square',
            hot: false,
            popular: false
        },
        {
            id: 2,
            name: 'Camarão ao Cocktail',
            price: 'R$ 42,90',
            description: 'Camarões grandes cozidos, servidos com molho cocktail de maracujá.',
            category: 'entradas',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=shrimp%20cocktail%20with%20avocado%20and%20tomato&image_size=square',
            hot: false,
            popular: true
        },
        {
            id: 3,
            name: 'Batatas Rústicas',
            price: 'R$ 28,90',
            description: 'Batatas com casca assadas, ervas finas e molho especial.',
            category: 'porcoes',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=fried%20potatoes%20with%20cheese%20and%20bacon&image_size=square',
            hot: false,
            popular: false
        },
        {
            id: 4,
            name: 'Pastel de Camarão',
            price: 'R$ 32,90',
            description: '4 unidades de pastel crocante recheado com camarões e queijo.',
            category: 'porcoes',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=brazilian%20pastel%20shrimp%20fried&image_size=square',
            hot: false,
            popular: false
        },
        {
            id: 5,
            name: 'Peixe Grelhado',
            price: 'R$ 69,90',
            description: 'Filé de corvina grelhado, arroz, salada e purê de batata.',
            category: 'principais',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=grilled%20fish%20with%20vegetables%20and%20rice&image_size=square',
            hot: true,
            popular: false
        },
        {
            id: 6,
            name: 'Risoto de Camarão',
            price: 'R$ 78,90',
            description: 'Cremoso risoto com camarões grelhados e queijo parmesão.',
            category: 'principais',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=risotto%20with%20shrimp%20and%20mushrooms&image_size=square',
            hot: false,
            popular: false
        },
        {
            id: 7,
            name: 'Mariscada Especial',
            price: 'R$ 159,90',
            description: 'Lagosta, camarão, mexilhões, polvo e peixe em molho especial.',
            category: 'frutosdomar',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=seafood%20platter%20lobster%20shrimp%20oysters&image_size=square',
            hot: false,
            popular: false
        },
        {
            id: 8,
            name: 'Lagosta Grelhada',
            price: 'R$ 149,90',
            description: 'Lagosta inteira grelhada com manteiga de alho e limão.',
            category: 'frutosdomar',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=grilled%20lobster%20with%20butter%20and%20lemon&image_size=square',
            hot: false,
            popular: false
        },
        {
            id: 9,
            name: 'Água de Coco',
            price: 'R$ 14,90',
            description: 'Água de coco natural, gelada e refrescante.',
            category: 'bebidas',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=fresh%20coconut%20water%20on%20beach&image_size=square',
            hot: false,
            popular: false
        },
        {
            id: 10,
            name: 'Caipirinha',
            price: 'R$ 24,90',
            description: 'Tradicional caipirinha brasileira com limão e cachaça premium.',
            category: 'bebidas',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=caipirinha%20cocktail%20with%20lime%20and%20cacha%C3%A7a&image_size=square',
            hot: false,
            popular: true
        },
        {
            id: 11,
            name: 'Pavlova de Frutas',
            price: 'R$ 28,90',
            description: 'Massa leve de merengue com frutas tropicais e creme.',
            category: 'sobremesas',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=pavlova%20dessert%20with%20fresh%20fruits%20and%20cream&image_size=square',
            hot: false,
            popular: false
        },
        {
            id: 12,
            name: 'Bolo de Chocolate',
            price: 'R$ 22,90',
            description: 'Bolo de chocolate com calda e sorvete de creme.',
            category: 'sobremesas',
            image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=chocolate%20cake%20with%20ice%20cream&image_size=square',
            hot: false,
            popular: false
        }
    ];

    // Carregar dados do localStorage ou usar dados iniciais
    let categories = JSON.parse(localStorage.getItem('categories')) || initialCategories;
    let dishes = JSON.parse(localStorage.getItem('dishes')) || initialDishes;
    if (!localStorage.getItem('categories')) {
        localStorage.setItem('categories', JSON.stringify(categories));
    }
    if (!localStorage.getItem('dishes')) {
        localStorage.setItem('dishes', JSON.stringify(dishes));
    }

    let currentFilter = 'todos';
    let editingId = null;
    let editingCategoryId = null;

    // Elementos DOM
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
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

    let uploadedImageBase64 = '';

    // Função para salvar no localStorage
    function saveDishes() {
        localStorage.setItem('dishes', JSON.stringify(dishes));
    }

    function saveCategories() {
        localStorage.setItem('categories', JSON.stringify(categories));
    }

    // Função para criar ID de categoria
    function createCategoryId(name) {
        return name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    }

    // Função para gerar ID único
    function generateId() {
        return Date.now() + Math.random();
    }

    // Função para renderizar o cardápio
    function renderMenu() {
        menuGrid.innerHTML = '';
        const searchTerm = searchInput.value.toLowerCase();
        
        const filteredDishes = dishes.filter(dish => {
            const matchesSearch = dish.name.toLowerCase().includes(searchTerm) || 
                                   dish.description.toLowerCase().includes(searchTerm);
            const matchesCategory = currentFilter === 'todos' || dish.category === currentFilter;
            return matchesSearch && matchesCategory;
        });

        filteredDishes.forEach(dish => {
            const dishElement = document.createElement('div');
            dishElement.className = `menu-item ${dish.hot ? 'badge-hot' : ''}`;
            dishElement.dataset.category = dish.category;
            
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

        // Animação ao aparecer
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

    // Função para renderizar a lista de edição
    function renderEditList() {
        editList.innerHTML = '';
        dishes.forEach(dish => {
            const category = categories.find(c => c.id === dish.category);
            const item = document.createElement('div');
            item.className = 'edit-item';
            item.innerHTML = `
                <div class="edit-item-info">
                    <h4>${dish.name}</h4>
                    <p>${category ? category.name : dish.category} - ${dish.price}</p>
                </div>
                <div class="edit-buttons">
                    <button class="edit-btn" data-id="${dish.id}">Editar</button>
                    <button class="delete-btn" data-id="${dish.id}">Remover</button>
                </div>
            `;
            editList.appendChild(item);
        });

        // Event listeners para editar e remover
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', () => editDish(parseFloat(btn.dataset.id)));
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => deleteDish(parseFloat(btn.dataset.id)));
        });
    }

    // Função para editar prato
    function editDish(id) {
        editingId = id;
        const dish = dishes.find(d => d.id === id);
        
        document.getElementById('dishName').value = dish.name;
        document.getElementById('dishPrice').value = dish.price;
        document.getElementById('dishDesc').value = dish.description;
        document.getElementById('dishCategory').value = dish.category;
        document.getElementById('dishImage').value = dish.image || '';
        document.getElementById('dishHot').checked = dish.hot;
        document.getElementById('dishPopular').checked = dish.popular;
        
        // Carregar preview da imagem existente
        uploadedImageBase64 = dish.image || '';
        if (dish.image) {
            showImagePreview(dish.image);
        } else {
            imagePreview.innerHTML = '';
        }
        
        // Mudar texto do botão
        addDishForm.querySelector('button[type="submit"]').textContent = 'Salvar Alterações';
        
        // Ir para tab de adicionar
        switchTab('add');
    }

    // Função para remover prato
    function deleteDish(id) {
        if (confirm('Tem certeza que deseja remover este prato?')) {
            dishes = dishes.filter(d => d.id !== id);
            saveDishes();
            renderMenu();
            renderEditList();
        }
    }

    // Função para mudar tabs
    function switchTab(tabName) {
        tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });
        tabContents.forEach(content => {
            content.classList.toggle('active', content.id === tabName + 'Tab');
        });
    }



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

    // Resetar formulário
    function resetForm() {
        addDishForm.reset();
        editingId = null;
        uploadedImageBase64 = '';
        imagePreview.innerHTML = '';
        addDishForm.querySelector('button[type="submit"]').textContent = 'Adicionar Prato';
    }

    // Evento das tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Evento do upload de imagem
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

    // Função para exibir preview da imagem
    function showImagePreview(imageSrc) {
        imagePreview.innerHTML = `<img src="${imageSrc}" alt="Preview">`;
    }

    // Evento do formulário
    addDishForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Usar imagem enviada se disponível, senão usar a URL
        const finalImage = uploadedImageBase64 || document.getElementById('dishImage').value;
        
        const dishData = {
            id: editingId || generateId(),
            name: document.getElementById('dishName').value,
            price: document.getElementById('dishPrice').value,
            description: document.getElementById('dishDesc').value,
            category: document.getElementById('dishCategory').value,
            image: finalImage,
            hot: document.getElementById('dishHot').checked,
            popular: document.getElementById('dishPopular').checked
        };

        if (editingId) {
            // Editar prato existente
            const index = dishes.findIndex(d => d.id === editingId);
            dishes[index] = dishData;
        } else {
            // Adicionar novo prato
            dishes.push(dishData);
        }

        saveDishes();
        renderMenu();
        renderEditList();
        resetForm();
        alert(editingId ? 'Prato atualizado com sucesso!' : 'Prato adicionado com sucesso!');
    });

    // Navegação
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            navMenu.classList.remove('active');
            navToggle.classList.toggle('active');
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        updateActiveNavLink();
    });

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Filtros
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            currentFilter = this.getAttribute('data-category');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            renderMenu();
        });
    });

    searchInput.addEventListener('input', function() {
        renderMenu();
    });

    // Compartilhamento
    shareBtn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'Restaurante Mar & Sol - Cardápio Digital',
                text: 'Confira o cardápio digital do Restaurante Mar & Sol!',
                url: window.location.href
            })
            .then(() => console.log('Compartilhamento realizado com sucesso!'))
            .catch((error) => console.log('Erro ao compartilhar:', error));
        } else {
            const tempInput = document.createElement('input');
            tempInput.value = window.location.href;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            alert('Link copiado para a área de transferência!');
        }
    });

    // Scroll suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Header scroll
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    header.style.transition = 'transform 0.3s ease';

    // Funções de categoria
    function renderCategorySelect() {
        dishCategorySelect.innerHTML = categories.map(cat => 
            `<option value="${cat.id}">${cat.name}</option>`
        ).join('');
    }

    function renderFilterButtons() {
        // Renderizar botões de filtro
        const filterContainer = document.querySelector('.category-filters');
        filterContainer.innerHTML = `
            <button class="filter-btn active" data-category="todos">Todos</button>
            ${categories.map(cat => 
                `<button class="filter-btn" data-category="${cat.id}">${cat.name}</button>`
            ).join('')}
        `;
        
        // Re-adicionar event listeners
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                currentFilter = this.getAttribute('data-category');
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                renderMenu();
            });
        });
    }

    function renderCategoryList() {
        categoryList.innerHTML = categories.map(cat => {
            const dishCount = dishes.filter(d => d.category === cat.id).length;
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

        // Adicionar event listeners
        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const input = document.querySelector(`.category-input[data-id="${id}"]`);
                const newName = input.value.trim();
                if (newName) {
                    const category = categories.find(c => c.id === id);
                    if (category) {
                        category.name = newName;
                        saveCategories();
                        renderCategorySelect();
                        renderFilterButtons();
                        renderCategoryList();
                        alert('Categoria atualizada!');
                    }
                }
            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const dishCount = dishes.filter(d => d.category === id).length;
                
                if (dishCount > 0) {
                    alert(`Não é possível remover. Esta categoria tem ${dishCount} prato(s). Mova os pratos para outra categoria primeiro.`);
                    return;
                }
                
                if (confirm('Tem certeza que deseja remover esta categoria?')) {
                    categories = categories.filter(c => c.id !== id);
                    saveCategories();
                    renderCategorySelect();
                    renderFilterButtons();
                    renderCategoryList();
                }
            });
        });
    }

    // Evento do formulário de categoria
    categoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('categoryName');
        const name = nameInput.value.trim();
        
        if (name) {
            const newId = createCategoryId(name);
            // Verificar se ID já existe
            if (categories.find(c => c.id === newId)) {
                alert('Esta categoria já existe!');
                return;
            }
            
            categories.push({ id: newId, name: name });
            saveCategories();
            renderCategorySelect();
            renderFilterButtons();
            renderCategoryList();
            nameInput.value = '';
            alert('Categoria adicionada!');
        }
    });

    // Evento do botão Admin atualizado
    adminBtn.addEventListener('click', () => {
        adminModal.classList.add('active');
        renderEditList();
        renderCategoryList();
        renderCategorySelect();
    });

    // Inicializar tudo
    renderCategorySelect();
    renderFilterButtons();
    renderMenu();
});
