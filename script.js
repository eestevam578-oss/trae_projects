document.addEventListener('DOMContentLoaded', function() {
    const PLACEHOLDER_IMAGE = "https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=prato%20delicioso%20de%20restaurante&image_size=square";

    const dishes = [
        // ENTRADAS E PORÇÕES
        { id: 1, name: "Ceviche (Peixe Branco ou Salmão)", price: "R$ 68,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 2, name: "Escabeche de Sardinha", price: "R$ 28,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 3, name: "Camarão Alho e Azeite", price: "R$ 110,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 4, name: "Camarão à Paulista (Grande)", price: "R$ 130,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 5, name: "Camarão à Dorê", price: "R$ 105,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 6, name: "Lula à Dorê", price: "R$ 112,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 7, name: "Lula à Provençal", price: "R$ 124,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 8, name: "Iscas de Frango na Panko", price: "R$ 74,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },
        { id: 9, name: "Batata Frita", price: "R$ 59,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 9 },
        { id: 10, name: "Mandioca Frita", price: "R$ 65,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 10 },
        { id: 11, name: "Chapa de Picanha com Mandioca", price: "R$ 180,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 11 },
        { id: 12, name: "Casquinha de Siri", price: "R$ 38,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 12 },
        { id: 13, name: "Sirizada", price: "R$ 85,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 13 },
        { id: 14, name: "Marisco no Bafo à Vinagrete", price: "R$ 120,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 14 },
        { id: 15, name: "Ancho Aperitivo", price: "R$ 128,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 15 },
        { id: 16, name: "Polvo à Provençal", price: "R$ 158,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 16 },
        { id: 17, name: "Polvo à Vinagrete", price: "R$ 158,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 17 },
        { id: 18, name: "Camarão Crocante", price: "R$ 98,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 18 },
        { id: 19, name: "Tilápia à Dorê", price: "R$ 105,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 19 },
        { id: 20, name: "Bolinho de Bacalhau (8 unidades)", price: "R$ 68,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 20 },
        { id: 21, name: "Bolinho de Mexilhão (6 unidades)", price: "R$ 65,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 21 },
        { id: 22, name: "Calabresa Acebolada (500g)", price: "R$ 72,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 22 },
        { id: 23, name: "Cação à Dorê", price: "R$ 95,00", description: "", category: "entradas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 23 },

        // SALADAS
        { id: 24, name: "Simples", price: "R$ 28,00", description: "Alface, tomate, cebola roxa e pepino.", category: "saladas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 25, name: "Mista", price: "R$ 42,00", description: "Alface, tomate, cebola roxa, pepino, rúcula, agrião e palmito.", category: "saladas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 26, name: "Caesar", price: "R$ 44,00", description: "Tiras de frango, alface picado, croutons, parmesão e molho Caesar.", category: "saladas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 27, name: "Salada Maionese", price: "R$ 45,00", description: "", category: "saladas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 28, name: "Salada Maionese com Camarão Branco", price: "R$ 95,00", description: "", category: "saladas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },

        // FRANGO
        { id: 29, name: "Frango Grelhado", price: "R$ 109,00", description: "Filé grelhado, acompanha arroz branco, batata frita, farofa e vinagrete.", category: "frango", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 30, name: "Frango ao Catupiry", price: "R$ 134,00", description: "Filé grelhado gratinado com Catupiry e parmesão, acompanha arroz branco e batata frita.", category: "frango", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 31, name: "Frango à Parmegiana", price: "R$ 128,00", description: "Filé à milanesa coberto com mussarela, molho ao sugo e parmesão. Acompanha arroz branco e batata frita.", category: "frango", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 32, name: "Frango com Salada", price: "R$ 99,00", description: "Filé grelhado com alface, tomate, cebola, pepino e palmito.", category: "frango", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 33, name: "Strogonoff de Frango", price: "R$ 124,00", description: "Iscas de frango ao molho rosé, acompanha arroz branco e batata frita.", category: "frango", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 34, name: "Frango com Palmito", price: "R$ 139,00", description: "Filé grelhado com arroz branco e palmito salteado na manteiga.", category: "frango", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },

        // PRATOS COM CARNE
        { id: 35, name: "Mignon Grelhado", price: "R$ 210,00", description: "Escalope de mignon grelhado, acompanha arroz branco, batata frita, farofa e vinagrete.", category: "carnes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 36, name: "Medalhão de Mignon", price: "R$ 219,00", description: "Escalope de mignon envolto em uma fatia de bacon grelhado, acompanha arroz à grega, batata frita, farofa e vinagrete.", category: "carnes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 37, name: "Mignon ao Catupiry", price: "R$ 229,00", description: "Escalope de mignon grelhado, coberto com catupiry e parmesão gratinado, acompanha arroz branco e batata frita.", category: "carnes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 38, name: "Mignon à Parmegiana", price: "R$ 219,00", description: "Mignon à milanesa coberto com mussarela, molho sugo e parmesão, acompanha arroz branco e batata frita.", category: "carnes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 39, name: "Picanha Grelhada", price: "R$ 238,00", description: "Picanha grelhada, acompanha arroz branco, batata frita, farofa e vinagrete.", category: "carnes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 40, name: "Picanha com Queijo Coalho", price: "R$ 248,00", description: "Picanha grelhada com queijo coalho selado e alho frito, acompanha arroz branco e batata frita.", category: "carnes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 41, name: "Mignon Strogonoff", price: "R$ 209,00", description: "Iscas de mignon salteadas ao molho rosé, acompanha arroz branco e batata frita.", category: "carnes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 42, name: "Mignon com Palmito", price: "R$ 228,00", description: "Mignon grelhado com palmito selado na manteiga, acompanha arroz branco.", category: "carnes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },
        { id: 43, name: "Mignon com Salada", price: "R$ 187,00", description: "Mignon grelhado, acompanha salada de alface, tomate, cebola roxa, pepino e palmito.", category: "carnes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 9 },
        { id: 44, name: "Ancho com Legumes", price: "R$ 189,00", description: "Ancho grelhado, acompanha arroz branco, legumes salteados na manteiga, farofa e vinagrete.", category: "carnes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 10 },
        { id: 45, name: "Ancho Sabor e Mar", price: "R$ 210,00", description: "Ancho grelhado coberto com molho roti e champignon, acompanha risoto de palmito e 4 tipos de ervas à base de leite de coco.", category: "carnes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 11 },

        // CAMARÃO BRANCO
        { id: 46, name: "Fricassê de Camarão", price: "R$ 210,00", description: "Camarões grandes e pequenos refogados, cobertos com molho à base de catupiry e milho, gratinado com mussarela e coberto com batata palha, acompanha arroz com palmito.", category: "camarao", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 47, name: "Camarão Recheado", price: "R$ 189,00", description: "Camarões recheados com catupiry à milanesa, acompanha arroz à grega e mandioca.", category: "camarao", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 48, name: "Camarão na Moranga", price: "R$ 238,00", description: "Camarões refogados com um creme à base de moranga, gratinado com catupiry e parmesão, acompanha arroz branco e batata frita.", category: "camarao", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 49, name: "Bobó de Camarão", price: "R$ 198,00", description: "Camarões grandes e pequenos ao creme de mandioca, leite de coco e dendê, acompanha arroz branco e farofa de dendê.", category: "camarao", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 50, name: "Camarão no Coco", price: "R$ 188,00", description: "Arroz cremoso feito com a própria água do coco, com camarões grandes e pequenos refogados no vinho branco, gratinado com parmesão.", category: "camarao", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 51, name: "Strogonoff de Camarão", price: "R$ 178,00", description: "Camarões grandes e pequenos salteados ao molho rosé, acompanha arroz branco e batata frita.", category: "camarao", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 52, name: "Chiclete de Camarão", price: "R$ 219,00", description: "Camarões grandes e pequenos refogados com um molho à base de coco, encorpado com mussarela, acompanha arroz branco e batata frita.", category: "camarao", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 53, name: "Parmegiana de Camarão", price: "R$ 189,00", description: "", category: "camarao", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },

        // SALMÃO
        { id: 54, name: "Salmão à Belle Meunière", price: "R$ 249,00", description: "Filé grelhado, coberto com camarão pequeno, champignon e alcaparras salteadas na manteiga.", category: "salmao", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 55, name: "Salmão com Legumes", price: "R$ 209,00", description: "Salmão grelhado, acompanha arroz e legumes (batata, cenoura, vagem, palmito e brócolis).", category: "salmao", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 56, name: "Salmão do Chefe", price: "R$ 289,00", description: "Salmão grelhado com camarão rosa, acompanha arroz com rúcula, tomate seco e palmito.", category: "salmao", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },

        // MASSAS
        { id: 57, name: "Talharim ou Espaguete Pomodoro", price: "R$ 79,00", description: "", category: "massas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 58, name: "Talharim ou Espaguete Molho Branco", price: "R$ 84,00", description: "", category: "massas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 59, name: "Talharim ou Espaguete Camarão", price: "R$ 194,00", description: "Camarões grandes e pequenos, molho à base de leite de coco, azeite de dendê, pimentões, tomate, cebola e coentro.", category: "massas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 60, name: "Talharim ou Espaguete Frutos do Mar", price: "R$ 226,00", description: "Camarões grandes e pequenos, lula e mexilhão, molho à base de leite de coco, dendê, pimentões, tomate, cebola e coentro.", category: "massas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 61, name: "Talharim ou Espaguete Sabor e Mar", price: "R$ 180,00", description: "Lula e mexilhão salteados em um fundo à base de azeite, alho, cebola, tomate e cenoura, finalizado com a massa e tomate cereja confitado.", category: "massas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },

        // RISOTOS
        { id: 62, name: "Risoto de Camarão", price: "R$ 194,00", description: "Camarões grandes e pequenos, molho à base de leite de coco, azeite de dendê, pimentões, tomate, cebola e coentro.", category: "risotos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 63, name: "Risoto de Frutos do Mar", price: "R$ 226,00", description: "Camarões grandes e pequenos, lula e mexilhão, molho à base de leite de coco, dendê, pimentões, tomate, cebola e coentro.", category: "risotos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 64, name: "Risoto Sabor e Mar", price: "R$ 210,00", description: "Risoto à base de leite de coco, lascas de coco, palmito e quatro tipos de ervas, acompanha banana da terra grelhada e peixe selado com uma camada de castanha.", category: "risotos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 65, name: "Risoto Italiano", price: "R$ 128,00", description: "", category: "risotos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 66, name: "Risoto de Mexilhão", price: "R$ 174,00", description: "", category: "risotos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 67, name: "Lambe-Lambe", price: "R$ 164,00", description: "", category: "risotos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 68, name: "Risoto de Legumes", price: "R$ 98,00", description: "Abobrinha, cenoura, brócolis e palmito.", category: "risotos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 69, name: "Lasanha Sabor e Mar", price: "R$ 198,00", description: "Deliciosa lasanha de linguado, banana da terra e molho branco, acompanha arroz com palmito e tomate salteado com ervas.", category: "risotos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },

        // PESCADOS
        { id: 70, name: "Pescada à Dorê", price: "R$ 119,00", description: "Acompanha arroz branco e batata sauté.", category: "pescados", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 71, name: "Pescada à Milanesa", price: "R$ 125,00", description: "Acompanha arroz à grega e batata frita.", category: "pescados", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 72, name: "Pescada ao Molho de Camarão", price: "R$ 150,00", description: "À dorê, coberto com molho de camarão, acompanha arroz branco e pirão.", category: "pescados", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 73, name: "Pescada à Parmegiana", price: "R$ 149,00", description: "À milanesa, gratinado com mussarela, molho sugo e parmesão, acompanha arroz branco e batata frita.", category: "pescados", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 74, name: "Pescada à Dorê/Milanesa com Salada", price: "R$ 98,00", description: "Acompanha alface, tomate, cebola, pepino, palmito e arroz branco.", category: "pescados", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 75, name: "Linguado à Dorê", price: "R$ 149,00", description: "Acompanha arroz branco e batata sauté.", category: "pescados", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 76, name: "Linguado à Milanesa", price: "R$ 155,00", description: "Acompanha arroz à grega e batata frita.", category: "pescados", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 77, name: "Linguado ao Molho de Camarão", price: "R$ 180,00", description: "À dorê, coberto com molho de camarão, acompanha arroz branco e pirão.", category: "pescados", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },
        { id: 78, name: "Linguado à Parmegiana", price: "R$ 179,00", description: "À milanesa, gratinado com mussarela, molho sugo e parmesão, acompanha arroz branco e batata frita.", category: "pescados", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 9 },
        { id: 79, name: "Linguado à Dorê/Milanesa com Salada", price: "R$ 128,00", description: "Acompanha alface, tomate, cebola, pepino, palmito e arroz branco.", category: "pescados", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 10 },

        // CAMBUCU
        { id: 80, name: "Cambucu à Caiçara", price: "R$ 198,00", description: "Filé espalmado, recheado com banana da terra grelhada, empanado e frito, acompanha arroz de mexilhão com ervas e palmito selado na manteiga.", category: "cambucu", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 81, name: "Cambucu Sabor e Mar", price: "R$ 188,00", description: "Filé grelhado, coberto com camarão grande, lula e mexilhão à provençal, acompanha arroz branco e batata corada.", category: "cambucu", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 82, name: "Cambucu à Belle Meunière", price: "R$ 184,00", description: "Filé grelhado, coberto com camarões pequenos, champignons e alcaparras salteadas na manteiga.", category: "cambucu", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 83, name: "Cambucu com Legumes", price: "R$ 158,00", description: "Filé grelhado, acompanha arroz branco e legumes salteados no azeite.", category: "cambucu", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 84, name: "Cambucu com Fritas e Salada", price: "R$ 158,00", description: "Filé grelhado, acompanha arroz branco, batata frita e salada simples.", category: "cambucu", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 85, name: "Cambucu Recheado", price: "R$ 189,00", description: "Filé empanado, recheado com catupiry e camarão, acompanha arroz à grega e batata frita.", category: "cambucu", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 86, name: "Cambucu ao Molho Branco", price: "R$ 185,00", description: "Filé grelhado, coberto com molho branco e champignons, gratinado com catupiry e parmesão.", category: "cambucu", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 87, name: "Cambucu ao Molho de Camarão", price: "R$ 189,00", description: "Filé grelhado, coberto com molho de camarão, acompanha arroz branco.", category: "cambucu", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },
        { id: 88, name: "Cambucu com Palmito", price: "R$ 185,00", description: "Filé grelhado, acompanha arroz branco e palmito selado na manteiga.", category: "cambucu", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 9 },

        // MOQUECAS E CALDEIRADAS
        { id: 89, name: "Moqueca de Peixe", price: "R$ 210,00", description: "Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.", category: "moquecas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 90, name: "Moqueca Mista", price: "R$ 270,00", description: "Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.", category: "moquecas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 91, name: "Moqueca de Camarão Branco", price: "R$ 270,00", description: "Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.", category: "moquecas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 92, name: "Caldeirada Completa (serve até 4 pessoas)", price: "R$ 490,00", description: "Peixe, lula, mexilhão, camarão e polvo. Serve até 4 pessoas.", category: "moquecas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 93, name: "Meia Caldeirada (serve 2 pessoas)", price: "R$ 290,00", description: "Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.", category: "moquecas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },

        // PAELLAS
        { id: 94, name: "Paella Frutos do Mar", price: "R$ 298,00", description: "Camarões grandes e pequenos, lula nacional, polvo e mexilhão refogados e cozidos no próprio caldo com açafrão e arroz.", category: "paellas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 95, name: "Paella Vegana", price: "R$ 98,00", description: "Abobrinha, brócolis, cenoura e palmito refogados, cozidos no próprio caldo com açafrão e arroz.", category: "paellas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 96, name: "Polvo Sabor e Mar", price: "R$ 239,00", description: "Palmito palmiera real, polvo e camarões grandes salteados com ervas, acompanha arroz branco, mandioca frita e banana da terra à provençal.", category: "paellas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },

        // ACOMPANHAMENTOS
        { id: 97, name: "Banana Provençal", price: "R$ 28,00", description: "Banana da terra à provençal.", category: "acompanhamentos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 98, name: "Pirão de Peixe", price: "R$ 21,00", description: "Pirão cremoso de peixe.", category: "acompanhamentos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 99, name: "Legumes na Manteiga", price: "R$ 23,00", description: "Legumes frescos refogados na manteiga.", category: "acompanhamentos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 100, name: "Palmito na Manteiga", price: "R$ 60,00", description: "Palmito palmiera real refogado na manteiga.", category: "acompanhamentos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 101, name: "Arroz", price: "R$ 18,00", description: "Arroz branco solto e saboroso.", category: "acompanhamentos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 102, name: "Feijão", price: "R$ 15,00", description: "Feijão tropeiro tradicional.", category: "acompanhamentos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 103, name: "Farofa", price: "R$ 12,00", description: "Farofa de mandioca crocante.", category: "acompanhamentos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 104, name: "Vinagrete", price: "R$ 18,00", description: "Vinagrete fresco de tomate e cebola.", category: "acompanhamentos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },
        { id: 105, name: "Arroz à Grega", price: "R$ 21,00", description: "Arroz com legumes e ervas finas.", category: "acompanhamentos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 9 },
        { id: 106, name: "Purê", price: "R$ 28,00", description: "Purê de batata cremoso.", category: "acompanhamentos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 10 },
        { id: 107, name: "Batata Sauté", price: "R$ 24,00", description: "Batatas douradas e crocantes.", category: "acompanhamentos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 11 },

        // PRATOS KIDS
        { id: 108, name: "Kids Filé Mignon", price: "R$ 34,90", description: "Acompanha arroz branco, feijão e batata frita.", category: "kids", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 109, name: "Kids Filé de Peixe", price: "R$ 32,90", description: "Acompanha arroz branco, feijão e batata frita.", category: "kids", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 110, name: "Kids Filé de Frango", price: "R$ 27,90", description: "Acompanha arroz branco, feijão e batata frita.", category: "kids", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 111, name: "Kids Espaguetinho (ao sugo ou manteiga)", price: "R$ 27,90", description: "", category: "kids", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },

        // LANCHES
        { id: 112, name: "X-Burguer", price: "R$ 32,90", description: "Todos os lanches acompanham batata frita.", category: "lanches", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 113, name: "X-Salada", price: "R$ 34,90", description: "Todos os lanches acompanham batata frita.", category: "lanches", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 114, name: "X-Bacon", price: "R$ 38,90", description: "Todos os lanches acompanham batata frita.", category: "lanches", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },

        // CAFÉ DA MANHÃ
        { id: 115, name: "Café Puro", price: "R$ 6,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 116, name: "Café com Leite", price: "R$ 8,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 117, name: "Achocolatado com Leite (Ovomaltine)", price: "R$ 10,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 118, name: "Pão com Manteiga", price: "R$ 6,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 119, name: "Pão na Chapa", price: "R$ 6,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 120, name: "Pão com Ovo", price: "R$ 8,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 121, name: "Misto Quente", price: "R$ 16,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 122, name: "Pão de Queijo", price: "R$ 16,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },
        { id: 123, name: "Croissant", price: "R$ 16,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 9 },
        { id: 124, name: "Coxinha", price: "R$ 12,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 10 },
        { id: 125, name: "Tapioca", price: "R$ 16,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 11 },
        { id: 126, name: "Pão com Requeijão na Chapa", price: "R$ 14,00", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 12 },
        { id: 127, name: "Pão com Mortadela e Queijo", price: "R$ 18,90", description: "", category: "cafe", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 13 },

        // REFRIGERANTES
        { id: 128, name: "Guaraná", price: "R$ 9,50", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 129, name: "Guaraná Zero", price: "R$ 9,50", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 130, name: "Coca-Cola", price: "R$ 9,50", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 131, name: "Coca-Cola Zero", price: "R$ 9,50", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 132, name: "Fanta Uva", price: "R$ 9,50", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 133, name: "Fanta Laranja", price: "R$ 9,50", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 134, name: "Soda Limonada", price: "R$ 9,50", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 135, name: "Tônica", price: "R$ 9,50", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },
        { id: 136, name: "H2O Limão", price: "R$ 9,90", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 9 },
        { id: 137, name: "Red Bull", price: "R$ 18,90", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 10 },
        { id: 138, name: "Monster", price: "R$ 19,90", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 11 },
        { id: 139, name: "Água sem gás", price: "R$ 6,50", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 12 },
        { id: 140, name: "Água com gás", price: "R$ 6,50", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 13 },
        { id: 141, name: "Soda Italiana", price: "R$ 20,00", description: "", category: "refrigerantes", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 14 },

        // SUCOS
        { id: 142, name: "Abacaxi", price: "R$ 16,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 143, name: "Abacaxi com Hortelã", price: "R$ 16,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 144, name: "Acerola", price: "R$ 16,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 145, name: "Morango", price: "R$ 16,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 146, name: "Maracujá", price: "R$ 16,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 147, name: "Frutas Vermelhas", price: "R$ 16,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 148, name: "Laranja", price: "R$ 16,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 149, name: "Limão", price: "R$ 16,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },
        { id: 150, name: "Manga", price: "R$ 16,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 9 },
        { id: 151, name: "Kiwi", price: "R$ 16,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 10 },
        { id: 152, name: "Suco 2 Sabores", price: "R$ 22,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 11 },
        { id: 153, name: "Suco com Leite", price: "R$ 19,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 12 },
        { id: 154, name: "Laranja com Cenoura", price: "R$ 19,90", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 13 },
        { id: 155, name: "Garrafa de Suco (750ml)", price: "R$ 32,00", description: "", category: "sucos", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 14 },

        // SOBREMESAS
        { id: 156, name: "Brownie", price: "R$ 29,90", description: "", category: "sobremesas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 157, name: "Petit Gâteau", price: "R$ 32,90", description: "", category: "sobremesas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 158, name: "Creme de Papaia", price: "R$ 34,90", description: "", category: "sobremesas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 159, name: "Sorvete (2 bolas)", price: "R$ 16,90", description: "", category: "sobremesas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },

        // DOSES
        { id: 160, name: "Velho Barreiro", price: "R$ 6,00", description: "", category: "doses", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 161, name: "Smirnoff", price: "R$ 14,50", description: "", category: "doses", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 162, name: "Absolut", price: "R$ 34,90", description: "", category: "doses", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 163, name: "Red Label", price: "R$ 25,90", description: "", category: "doses", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 164, name: "Black Label", price: "R$ 35,90", description: "", category: "doses", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 165, name: "Jack Daniel's", price: "R$ 38,90", description: "", category: "doses", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 166, name: "Campari", price: "R$ 18,50", description: "", category: "doses", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 167, name: "São Francisco", price: "R$ 11,50", description: "", category: "doses", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },
        { id: 168, name: "Licor 43", price: "R$ 25,90", description: "", category: "doses", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 9 },
        { id: 169, name: "Conhaque Domecq", price: "R$ 36,90", description: "", category: "doses", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 10 },
        { id: 170, name: "Seleta", price: "R$ 9,00", description: "", category: "doses", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 11 },

        // CERVEJAS
        { id: 171, name: "Heineken (Long Neck)", price: "R$ 13,90", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 172, name: "Corona (Long Neck)", price: "R$ 14,90", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 173, name: "Amstel Ultra (Long Neck)", price: "R$ 13,90", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 174, name: "Heineken Zero (Long Neck)", price: "R$ 12,90", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 175, name: "Corona Zero (Long Neck)", price: "R$ 14,90", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 176, name: "Praya (Long Neck)", price: "R$ 13,90", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 177, name: "Heineken (600 ml)", price: "R$ 22,00", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 178, name: "Original (600 ml)", price: "R$ 18,90", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },
        { id: 179, name: "Amstel (600 ml)", price: "R$ 18,90", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 9 },
        { id: 180, name: "Estrella Galicia (600 ml)", price: "R$ 21,90", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 10 },
        { id: 181, name: "Eisenbahn (600 ml)", price: "R$ 17,90", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 11 },
        { id: 182, name: "Petra (600 ml)", price: "R$ 15,90", description: "", category: "cervejas", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 12 },

        // DRINKS
        { id: 183, name: "Caipirinha de Cachaça", price: "R$ 24,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 1 },
        { id: 184, name: "Caipirinha de Saquê", price: "R$ 29,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 2 },
        { id: 185, name: "Caipiroska", price: "R$ 34,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 3 },
        { id: 186, name: "Negroni", price: "R$ 39,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 4 },
        { id: 187, name: "Aperol Spritz", price: "R$ 33,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 5 },
        { id: 188, name: "Moscow Mule", price: "R$ 34,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 6 },
        { id: 189, name: "Dry Martini", price: "R$ 32,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 7 },
        { id: 190, name: "Piña Colada", price: "R$ 32,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 8 },
        { id: 191, name: "Margarita", price: "R$ 28,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 9 },
        { id: 192, name: "Sex on the Beach", price: "R$ 32,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 10 },
        { id: 193, name: "Lagoa Azul", price: "R$ 28,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 11 },
        { id: 194, name: "Gin Tropical com Espuma", price: "R$ 35,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 12 },
        { id: 195, name: "Whisky Sour", price: "R$ 33,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 13 },
        { id: 196, name: "Gin Tônica", price: "R$ 31,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 14 },
        { id: 197, name: "Cosmopolitan", price: "R$ 38,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 15 },
        { id: 198, name: "Penicillin", price: "R$ 38,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 16 },
        { id: 199, name: "Mojito", price: "R$ 31,90", description: "", category: "drinks", image: PLACEHOLDER_IMAGE, disponivel: true, destaque: false, ordem: 17 }
    ];

    const categories = [
        { id: "entradas", name: "Entradas e Porções" },
        { id: "saladas", name: "Saladas" },
        { id: "frango", name: "Frango" },
        { id: "carnes", name: "Carnes" },
        { id: "camarao", name: "Camarão Branco" },
        { id: "salmao", name: "Salmão" },
        { id: "massas", name: "Massas" },
        { id: "risotos", name: "Risotos" },
        { id: "pescados", name: "Pescados" },
        { id: "cambucu", name: "Cambucu" },
        { id: "moquecas", name: "Moquecas e Caldeiradas" },
        { id: "paellas", name: "Paellas" },
        { id: "acompanhamentos", name: "Acompanhamentos" },
        { id: "kids", name: "Pratos Kids" },
        { id: "lanches", name: "Lanches" },
        { id: "cafe", name: "Café da Manhã" },
        { id: "refrigerantes", name: "Refrigerantes" },
        { id: "sucos", name: "Sucos" },
        { id: "sobremesas", name: "Sobremesas" },
        { id: "doses", name: "Doses" },
        { id: "cervejas", name: "Cervejas" },
        { id: "drinks", name: "Drinks" }
    ];

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const searchInput = document.getElementById('searchInput');
    const menuContainer = document.getElementById('menuContainer');
    const categoryButtonsContainer = document.getElementById('categoryButtons');
    const backToTop = document.getElementById('backToTop');
    const shareBtn = document.getElementById('shareBtn');
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');

    function updateArrows() {
        const container = categoryButtonsContainer;
        if (!container) return;
        
        const isAtStart = container.scrollLeft <= 10;
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
        
        arrowLeft.disabled = isAtStart;
        arrowRight.disabled = isAtEnd;
    }

    function scrollCarousel(direction) {
        const scrollAmount = 150;
        if (direction === 'left') {
            categoryButtonsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            categoryButtonsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

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
        
        updateArrows();
    }

    function renderMenu() {
        menuContainer.innerHTML = '';
        const searchTerm = searchInput.value.toLowerCase();
        
        categories.forEach(category => {
            const categoryDishes = dishes
                .filter(dish => {
                    const matchesCategory = dish.category === category.id;
                    const matchesSearch = dish.name.toLowerCase().includes(searchTerm) || dish.description.toLowerCase().includes(searchTerm);
                    return matchesCategory && matchesSearch;
                })
                .sort((a, b) => a.ordem - b.ordem);

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
    
    arrowLeft.addEventListener('click', () => scrollCarousel('left'));
    arrowRight.addEventListener('click', () => scrollCarousel('right'));
    
    categoryButtonsContainer.addEventListener('scroll', updateArrows);
    
    window.addEventListener('resize', updateArrows);
    
    renderCategoryButtons();
    renderMenu();
    
    setTimeout(updateArrows, 100);
    setTimeout(updateArrows, 500);
});
