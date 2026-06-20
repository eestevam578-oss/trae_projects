document.addEventListener('DOMContentLoaded', function() {
    const dishes = [
        { id: 48, name: 'Ceviche (peixe branco ou salmão)', price: 'R$ 68,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 49, name: 'Escabeche de sardinha', price: 'R$ 28,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 50, name: 'Camarão alho e azeite', price: 'R$ 110,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 51, name: 'Camarão à paulista (grande)', price: 'R$ 130,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 52, name: 'Camarão à dorê', price: 'R$ 105,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 53, name: 'Lula à dorê', price: 'R$ 112,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 54, name: 'Lula à provençal', price: 'R$ 124,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 55, name: 'Iscas de frango na panko', price: 'R$ 74,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 56, name: 'Batata frita', price: 'R$ 59,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 57, name: 'Mandioca frita', price: 'R$ 65,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 58, name: 'Chapa de picanha com mandioca', price: 'R$ 180,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 59, name: 'Casquinha de siri', price: 'R$ 38,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 60, name: 'Sirizada', price: 'R$ 85,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 61, name: 'Marisco no bafo à vinagrete', price: 'R$ 120,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 62, name: 'Ancho aperitivo', price: 'R$ 128,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 63, name: 'Polvo à provençal', price: 'R$ 158,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 64, name: 'Polvo à vinagrete', price: 'R$ 158,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 65, name: 'Camarão crocante', price: 'R$ 98,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 66, name: 'Tilápia à dorê', price: 'R$ 105,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 67, name: 'Simples', price: 'R$ 28,00', description: 'Alface, tomate, cebola roxa e pepino.', category: 'saladas', hot: false, popular: false },
        { id: 68, name: 'Mista', price: 'R$ 42,00', description: 'Alface, tomate, cebola roxa, pepino, rúcula, agrião e mais ingredientes.', category: 'saladas', hot: false, popular: false },
        { id: 69, name: 'Caesar', price: 'R$ 44,00', description: 'Tiras de frango, alface picado, croutons, parmesão e molho caesar.', category: 'saladas', hot: false, popular: false },
        { id: 70, name: 'Salada maionese', price: 'R$ 45,00', description: '', category: 'saladas', hot: false, popular: false },
        { id: 71, name: 'Salada maionese com camarão branco', price: 'R$ 95,00', description: '', category: 'saladas', hot: false, popular: false },
        { id: 1, name: 'Moqueca de Peixe', price: 'R$ 210,00', description: 'Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.', category: 'moquecas', hot: false, popular: false },
        { id: 2, name: 'Moqueca Mista', price: 'R$ 270,00', description: 'Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.', category: 'moquecas', hot: false, popular: false },
        { id: 3, name: 'Moqueca de Camarão Branco', price: 'R$ 270,00', description: 'Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.', category: 'moquecas', hot: false, popular: false },
        { id: 4, name: 'Caldeirada Completa', price: 'R$ 590,00', description: 'Peixe, lula, mexilhão, camarão e polvo. Serve até 4 pessoas.', category: 'moquecas', hot: false, popular: false },
        { id: 5, name: 'Meia Caldeirada', price: 'R$ 260,00', description: 'Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.', category: 'moquecas', hot: false, popular: false },
        { id: 6, name: 'Paella Frutos do Mar', price: 'R$ 298,00', description: 'Camarões grandes e pequenos, lula nacional, polvo e mexilhão refogados e cozidos no próprio caldo com açafrão e arroz.', category: 'moquecas', hot: false, popular: false },
        { id: 7, name: 'Paella Vegana', price: 'R$ 98,00', description: 'Abobrinha, brócolis, cenoura e palmito refogados, cozidos no próprio caldo com açafrão e arroz.', category: 'moquecas', hot: false, popular: false },
        { id: 8, name: 'Polvo Sabor e Mar', price: 'R$ 239,00', description: 'Palmito palmiera real, polvo e camarões grandes salteados com ervas, acompanha arroz branco, mandioca frita e banana da terra à provençal.', category: 'moquecas', hot: false, popular: false },
        { id: 72, name: 'Mignon Grelhado', price: 'R$ 210,00', description: 'Escalope de mignon grelhado, acompanha arroz branco, batata frita, farofa e vinagrete.', category: 'carnes', hot: false, popular: false },
        { id: 73, name: 'Medalhão de Mignon', price: 'R$ 219,00', description: 'Escalope de mignon envolto em uma fatia de bacon grelhado, acompanha arroz à grega, batata frita, farofa e vinagrete.', category: 'carnes', hot: false, popular: false },
        { id: 74, name: 'Mignon ao Catupiry', price: 'R$ 229,00', description: 'Escalope de mignon grelhado, coberto com catupiry e parmesão gratinado, acompanha arroz branco e batata frita.', category: 'carnes', hot: false, popular: false },
        { id: 75, name: 'Mignon Parmegiana', price: 'R$ 219,00', description: 'Mignon à milanesa coberto com mussarela, molho sugo e parmesão, acompanha arroz branco e batata frita.', category: 'carnes', hot: false, popular: false },
        { id: 76, name: 'Picanha Grelhada', price: 'R$ 238,00', description: 'Picanha grelhada, acompanha arroz branco, batata frita, farofa e vinagrete.', category: 'carnes', hot: false, popular: false },
        { id: 77, name: 'Picanha com Queijo Coalho', price: 'R$ 248,00', description: 'Picanha grelhada com queijo coalho selado e alho frito, acompanha arroz branco e batata frita.', category: 'carnes', hot: false, popular: false },
        { id: 78, name: 'Mignon Strogonoff', price: 'R$ 209,00', description: 'Iscas de mignon salteadas ao molho rosé, acompanha arroz branco e batata frita.', category: 'carnes', hot: false, popular: false },
        { id: 79, name: 'Mignon com Salada', price: 'R$ 187,00', description: 'Mignon grelhado, acompanha salada de alface, tomate, cebola roxa, pepino e palmito.', category: 'carnes', hot: false, popular: false },
        { id: 80, name: 'Ancho com Legumes', price: 'R$ 189,00', description: 'Ancho grelhado, acompanha arroz branco, legumes salteados na manteiga, farofa e vinagrete.', category: 'carnes', hot: false, popular: false },
        { id: 81, name: 'Ancho Sabor e Mar', price: 'R$ 210,00', description: 'Ancho grelhado coberto com molho roti e champignon, acompanha risoto de palmito e 4 tipos de ervas à base de leite de coco.', category: 'carnes', hot: false, popular: false },
        { id: 82, name: 'Frango Grelhado', price: 'R$ 109,00', description: 'Filé grelhado, acompanha arroz branco, batata frita, farofa e vinagrete.', category: 'frango', hot: false, popular: false },
        { id: 83, name: 'Frango ao Catupiry', price: 'R$ 134,00', description: 'Filé grelhado, gratinado com catupiry e parmesão, acompanha arroz branco e batata frita.', category: 'frango', hot: false, popular: false },
        { id: 84, name: 'Frango à Parmegiana', price: 'R$ 128,00', description: 'Filé à milanesa, coberto com mussarela, molho ao sugo e parmesão, acompanha arroz branco e batata frita.', category: 'frango', hot: false, popular: false },
        { id: 85, name: 'Frango com Salada', price: 'R$ 99,00', description: 'Filé grelhado, acompanha salada de alface, tomate, cebola, pepino e palmito, e arroz branco.', category: 'frango', hot: false, popular: false },
        { id: 86, name: 'Strogonoff de Frango', price: 'R$ 124,00', description: '', category: 'frango', hot: false, popular: false },
        { id: 20, name: 'Talharim ou Espaguete Ao Pomodoro', price: 'R$ 79,00', description: '', category: 'massas', hot: false, popular: false },
        { id: 21, name: 'Talharim ou Espaguete Ao Molho Branco', price: 'R$ 84,00', description: '', category: 'massas', hot: false, popular: false },
        { id: 22, name: 'Risoto De Camarão', price: 'R$ 194,00', description: 'Camarões grandes e pequenos, molho à base de leite de coco, azeite de dendê, pimentões, tomate, cebola e coentro.', category: 'massas', hot: false, popular: false },
        { id: 23, name: 'Risoto De Frutos do Mar', price: 'R$ 226,00', description: 'Camarões grandes e pequenos, lula e mexilhão, molho à base de leite de coco, dendê, pimentões, tomate, cebola e coentro.', category: 'massas', hot: false, popular: false },
        { id: 24, name: 'Sabor e Mar', price: 'R$ 180,00', description: 'Lula e mexilhão salteados em um fundo à base de azeite, alho, cebola, tomate e cenoura, finalizado com a massa e tomate cereja confitado.', category: 'massas', hot: false, popular: false },
        { id: 25, name: 'Risoto de Camarão', price: 'R$ 194,00', description: '', category: 'risotos', hot: false, popular: false },
        { id: 26, name: 'Risoto de Frutos do Mar', price: 'R$ 226,00', description: '', category: 'risotos', hot: false, popular: false },
        { id: 27, name: 'Risoto Sabor e Mar', price: 'R$ 210,00', description: 'Risoto à base de leite de coco, lascas de coco, palmito e quatro tipos de ervas, acompanha banana da terra grelhada e peixe selado com uma camada de castanha.', category: 'risotos', hot: false, popular: false },
        { id: 28, name: 'Risoto Italiano', price: 'R$ 128,00', description: '', category: 'risotos', hot: false, popular: false },
        { id: 29, name: 'Risoto de Mexilhão', price: 'R$ 174,00', description: '', category: 'risotos', hot: false, popular: false },
        { id: 30, name: 'Lambe-Lambe', price: 'R$ 164,00', description: '', category: 'risotos', hot: false, popular: false },
        { id: 31, name: 'Risoto de Legumes', price: 'R$ 98,00', description: 'Abobrinha, cenoura, brócolis e palmito.', category: 'risotos', hot: false, popular: false },
        { id: 32, name: 'Lasanha Sabor e Mar', price: 'R$ 189,00', description: 'Deliciosa lasanha de linguado, banana da terra e molho branco, acompanha arroz com palmito e tomate salteado com ervas.', category: 'risotos', hot: false, popular: false },
        { id: 33, name: 'Salmão à Belle', price: 'R$ 209,00', description: 'Filé grelhado, coberto com camarão pequeno, champignon e alcaparras salteadas na manteiga.', category: 'salmao', hot: false, popular: false },
        { id: 34, name: 'Salmão com Legumes', price: 'R$ 179,00', description: 'Salmão grelhado, acompanha arroz e legumes (batata, cenoura, vagem, palmito e brócolis).', category: 'salmao', hot: false, popular: false },
        { id: 35, name: 'Salmão do Chefe', price: 'R$ 239,00', description: 'Salmão grelhado com camarão rosa, acompanha arroz com rúcula, tomate seco e palmito.', category: 'salmao', hot: false, popular: false },
        { id: 36, name: 'Cambucu à Caiçara', price: 'R$ 198,00', description: 'Filé espalmado, recheado com banana da terra grelhada, empanado e frito, acompanha arroz de mexilhão com ervas e palmito selado na manteiga.', category: 'cambucu', hot: false, popular: false },
        { id: 37, name: 'Cambucu Sabor e Mar', price: 'R$ 188,00', description: 'Filé grelhado, coberto com camarão grande, lula e mexilhão à provençal, acompanha arroz branco e batata corada.', category: 'cambucu', hot: false, popular: false },
        { id: 38, name: 'Cambucu à Belle Meunière', price: 'R$ 184,00', description: 'Filé grelhado, coberto com camarões pequenos, champignons e alcaparras salteadas na manteiga.', category: 'cambucu', hot: false, popular: false },
        { id: 39, name: 'Cambucu com Legumes', price: 'R$ 158,00', description: 'Filé grelhado, acompanha arroz branco e legumes salteados no azeite.', category: 'cambucu', hot: false, popular: false },
        { id: 40, name: 'Cambucu com Fritas e Salada', price: 'R$ 158,00', description: 'Filé grelhado, acompanha arroz branco, batata frita e salada simples.', category: 'cambucu', hot: false, popular: false },
        { id: 41, name: 'Cambucu Recheado', price: 'R$ 189,00', description: 'Filé empanado, recheado com catupiry e camarão, acompanha arroz à grega e batata frita.', category: 'cambucu', hot: false, popular: false },
        { id: 42, name: 'Cambucu ao Molho Branco', price: 'R$ 185,00', description: 'Filé grelhado, coberto com molho branco e champignons, gratinado com catupiry e parmesão.', category: 'cambucu', hot: false, popular: false },
        { id: 43, name: 'Pescada Branca ou Linguado À Dorê', price: 'R$ 119,00', description: 'Acompanha arroz branco e batata sauté.', category: 'pescada', hot: false, popular: false },
        { id: 44, name: 'Pescada Branca ou Linguado À Milanesa', price: 'R$ 125,00', description: 'Acompanha arroz à grega e batata frita.', category: 'pescada', hot: false, popular: false },
        { id: 45, name: 'Pescada Branca ou Linguado Ao Molho de Camarão', price: 'R$ 150,00', description: 'À dorê, coberto com molho de camarão, acompanha arroz branco e pirão.', category: 'pescada', hot: false, popular: false },
        { id: 46, name: 'Pescada Branca ou Linguado À Parmegiana', price: 'R$ 149,00', description: 'À milanesa, gratinado com mussarela, molho sugo e parmesão, acompanha arroz branco e batata frita.', category: 'pescada', hot: false, popular: false },
        { id: 47, name: 'Pescada Branca ou Linguado À Dorê ou à Milanesa com Salada', price: 'R$ 98,00', description: 'Acompanha alface, tomate, cebola, pepino, palmito e arroz branco.', category: 'pescada', hot: false, popular: false },
        { id: 87, name: 'Fricassé de Camarão', price: 'R$ 210,00', description: 'Camarões grandes e pequenos refogados, cobertos com molho à base de catupiry e milho, gratinado com mussarela e coberto com batata palha, acompanha arroz com palmito.', category: 'camarao', hot: false, popular: false },
        { id: 88, name: 'Camarão Recheado', price: 'R$ 179,00', description: 'Camarões recheados com catupiry à milanesa, acompanha arroz à grega e mandioca.', category: 'camarao', hot: false, popular: false },
        { id: 89, name: 'Camarão na Moranga', price: 'R$ 218,00', description: 'Camarões refogados com um creme à base de moranga, gratinado com catupiry e parmesão, acompanha arroz branco e batata frita.', category: 'camarao', hot: false, popular: false },
        { id: 90, name: 'Bobó de Camarão', price: 'R$ 198,00', description: 'Camarões grandes e pequenos ao creme de mandioca, leite de coco e dendê, acompanha arroz branco e farofa de dendê.', category: 'camarao', hot: false, popular: false },
        { id: 91, name: 'Camarão no Cocô', price: 'R$ 178,00', description: 'Arroz cremoso feito com a própria água do coco, com camarões grandes e pequenos refogados no vinho branco, gratinado com parmesão.', category: 'camarao', hot: false, popular: false },
        { id: 92, name: 'Strogonoff de Camarão', price: 'R$ 178,00', description: 'Camarões grandes e pequenos salteados ao molho rosé, acompanha arroz branco e batata frita.', category: 'camarao', hot: false, popular: false },
        { id: 93, name: 'Chiclete de Camarão', price: 'R$ 219,00', description: 'Camarões grandes e pequenos refogados com um molho à base de coco, encorpado com mussarela, acompanha arroz branco e batata frita.', category: 'camarao', hot: false, popular: false },
        { id: 94, name: 'Parmegiana de Camarão', price: 'R$ 189,00', description: '', category: 'camarao', hot: false, popular: false },
        { id: 9, name: 'Banana Provençal', price: 'R$ 28,00', description: 'Banana da terra à provençal.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 10, name: 'Pirão de Peixe', price: 'R$ 21,00', description: 'Pirão cremoso de peixe.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 11, name: 'Legumes na Manteiga', price: 'R$ 23,00', description: 'Legumes frescos refogados na manteiga.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 12, name: 'Palmito na Manteiga', price: 'R$ 60,00', description: 'Palmito palmiera real refogado na manteiga.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 13, name: 'Arroz', price: 'R$ 18,00', description: 'Arroz branco solto e saboroso.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 14, name: 'Feijão', price: 'R$ 15,00', description: 'Feijão tropeiro tradicional.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 15, name: 'Farofa', price: 'R$ 12,00', description: 'Farofa de mandioca crocante.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 16, name: 'Vinagrete', price: 'R$ 18,00', description: 'Vinagrete fresco de tomate e cebola.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 17, name: 'Arroz à Grega', price: 'R$ 21,00', description: 'Arroz com legumes e ervas finas.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 18, name: 'Purê', price: 'R$ 28,00', description: 'Purê de batata cremoso.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 19, name: 'Batata Sauté', price: 'R$ 24,00', description: 'Batatas douradas e crocantes.', category: 'acompanhamentos', hot: false, popular: false }
    ];

    const categories = [
        { id: 'entradas', name: 'Entradas e Porções' },
        { id: 'saladas', name: 'Saladas' },
        { id: 'moquecas', name: 'Moquecas, Caldeiradas e Paellas' },
        { id: 'carnes', name: 'Pratos com Carne' },
        { id: 'frango', name: 'Frango' },
        { id: 'massas', name: 'Massas' },
        { id: 'risotos', name: 'Risotos' },
        { id: 'camarao', name: 'Pratos com Camarão Branco' },
        { id: 'salmao', name: 'Salmão' },
        { id: 'cambucu', name: 'Pratos com Cambucu' },
        { id: 'pescada', name: 'Pescada Branca ou Linguado' },
        { id: 'acompanhamentos', name: 'Acompanhamentos' }
    ];

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const searchInput = document.getElementById('searchInput');
    const menuContainer = document.getElementById('menuContainer');
    const categoryButtonsContainer = document.getElementById('categoryButtons');
    const backToTop = document.getElementById('backToTop');
    const shareBtn = document.getElementById('shareBtn');

    function renderCategoryButtons() {
        categoryButtonsContainer.innerHTML = '';
        
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.textContent = category.name;
            button.dataset.category = category.id;
            
            button.addEventListener('click', () => {
                const targetSection = document.getElementById(`category-${category.id}`);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                
                document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
            
            categoryButtonsContainer.appendChild(button);
        });
    }

    function renderMenu() {
        menuContainer.innerHTML = '';
        const searchTerm = searchInput.value.toLowerCase();
        
        categories.forEach(category => {
            const categoryDishes = dishes.filter(dish => {
                const matchesSearch = dish.name.toLowerCase().includes(searchTerm) || dish.description.toLowerCase().includes(searchTerm);
                return dish.category === category.id && matchesSearch;
            });

            if (categoryDishes.length > 0) {
                const categorySection = document.createElement('div');
                categorySection.className = 'category-section';
                categorySection.id = `category-${category.id}`;
                
                categorySection.innerHTML = `
                    <h3 class="category-title">${category.name}</h3>
                    <div class="category-dishes"></div>
                `;
                
                const dishesContainer = categorySection.querySelector('.category-dishes');
                
                categoryDishes.forEach((dish, index) => {
                    const dishElement = document.createElement('div');
                    dishElement.className = 'dish-item';
                    
                    dishElement.innerHTML = `
                        <div class="dish-info">
                            <h4 class="dish-name">${dish.name}</h4>
                            <p class="dish-description">${dish.description}</p>
                        </div>
                        <span class="dish-price">${dish.price}</span>
                    `;
                    
                    dishesContainer.appendChild(dishElement);
                    
                    setTimeout(() => {
                        dishElement.style.opacity = '1';
                    }, index * 100);
                });
                
                menuContainer.appendChild(categorySection);
            }
        });
    }

    searchInput.addEventListener('input', renderMenu);

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
                title: 'Restaurante Sabor e Mar - Cardápio Digital',
                text: 'Confira o cardápio digital do Restaurante Sabor e Mar!',
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
    renderCategoryButtons();
    renderMenu();
});
