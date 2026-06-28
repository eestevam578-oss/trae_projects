document.addEventListener('DOMContentLoaded', function() {
    const dishes = [
        // Entradas e Porções
        { id: 1, name: 'Ceviche (peixe branco ou salmão)', price: 'R$ 68,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 2, name: 'Escabeche de sardinha', price: 'R$ 28,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 3, name: 'Camarão alho e azeite', price: 'R$ 110,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 4, name: 'Camarão à paulista (grande)', price: 'R$ 130,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 5, name: 'Camarão à dorê', price: 'R$ 105,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 6, name: 'Lula à dorê', price: 'R$ 112,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 7, name: 'Lula à provençal', price: 'R$ 124,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 8, name: 'Iscas de frango na panko', price: 'R$ 74,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 9, name: 'Batata frita', price: 'R$ 59,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 10, name: 'Mandioca frita', price: 'R$ 65,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 11, name: 'Chapa de picanha com mandioca', price: 'R$ 180,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 12, name: 'Casquinha de siri', price: 'R$ 38,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 13, name: 'Sirizada', price: 'R$ 85,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 14, name: 'Marisco no bafo à vinagrete', price: 'R$ 120,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 15, name: 'Ancho aperitivo', price: 'R$ 128,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 16, name: 'Polvo à provençal', price: 'R$ 158,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 17, name: 'Polvo à vinagrete', price: 'R$ 158,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 18, name: 'Camarão crocante', price: 'R$ 98,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 19, name: 'Tilápia à dorê', price: 'R$ 105,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 20, name: 'Bolinho de Bacalhau (8 unidades)', price: 'R$ 68,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 21, name: 'Bolinho de Peixe (6 unidades)', price: 'R$ 65,00', description: '', category: 'entradas', hot: false, popular: false },
        { id: 22, name: 'Caldeirada acolhida (500g)', price: 'R$ 72,00', description: '', category: 'entradas', hot: false, popular: false },

        // Saladas
        { id: 23, name: 'Simples', price: 'R$ 28,00', description: 'Alface, tomate, cebola roxa e pepino.', category: 'saladas', hot: false, popular: false },
        { id: 24, name: 'Mista', price: 'R$ 42,00', description: 'Alface, tomate, cebola roxa, pepino, rúcula, agrião e palmito.', category: 'saladas', hot: false, popular: false },
        { id: 25, name: 'Caesar', price: 'R$ 44,00', description: 'Tiras de frango, alface picado, croutons, parmesão e molho caesar.', category: 'saladas', hot: false, popular: false },
        { id: 26, name: 'Salada maionese', price: 'R$ 45,00', description: 'Batata palha, ovo picado, cenoura, parmesão e molho cozido.', category: 'saladas', hot: false, popular: false },
        { id: 27, name: 'Salada maionese com camarão branco', price: 'R$ 95,00', description: '', category: 'saladas', hot: false, popular: false },

        // Massas
        { id: 28, name: 'Talharim ou Espaguete ao Pomodoro', price: 'R$ 85,00', description: 'De tomate', category: 'massas', hot: false, popular: false },
        { id: 29, name: 'Talharim ou Espaguete ao Molho Branco', price: 'R$ 84,00', description: 'De queijo', category: 'massas', hot: false, popular: false },
        { id: 30, name: 'Talharim ou Espaguete de Frutos do Mar', price: 'R$ 234,00', description: 'Camarão grande e pequeno, lula e mexilhão, molho à base de leite de coco, azeite de dendê, pimentões, tomate, cebola e coentro.', category: 'massas', hot: false, popular: false },
        { id: 31, name: 'Talharim ou Espaguete Sabor e Mar', price: 'R$ 210,00', description: 'Lula e mexilhão salteados em um fundo à base de azeite, alho, cebola, tomate e cenoura, finalizado com a massa e tomate cereja confitado.', category: 'massas', hot: false, popular: false },
        { id: 32, name: 'Risoto de Camarão', price: 'R$ 194,00', description: 'Camarões grandes e pequenos, molho à base de leite de coco, azeite de dendê, pimentões, tomate, cebola e coentro.', category: 'massas', hot: false, popular: false },
        { id: 33, name: 'Risoto de Frutos do Mar', price: 'R$ 226,00', description: 'Camarões grandes e pequenos, lula e mexilhão, molho à base de leite de coco, dendê, pimentões, tomate, cebola e coentro.', category: 'massas', hot: false, popular: false },

        // Risotos
        { id: 34, name: 'Risoto de Camarão', price: 'R$ 194,00', description: 'Camarões grandes e pequenos, molho à base de leite de coco, azeite de dendê, pimentões, tomate, cebola e coentro.', category: 'risotos', hot: false, popular: false },
        { id: 35, name: 'Risoto de Frutos do Mar', price: 'R$ 226,00', description: 'Camarões grandes e pequenos, lula e mexilhão, molho à base de leite de coco, dendê, pimentões, tomate, cebola e coentro.', category: 'risotos', hot: false, popular: false },
        { id: 36, name: 'Risoto Sabor e Mar', price: 'R$ 210,00', description: 'Risoto à base de leite de coco, lascas de coco, palmito e quatro tipos de ervas, acompanha banana da terra grelhada e peixe selado com uma camada de castanha.', category: 'risotos', hot: false, popular: false },
        { id: 37, name: 'Risoto Italiano', price: 'R$ 128,00', description: '', category: 'risotos', hot: false, popular: false },
        { id: 38, name: 'Risoto de Mexilhão', price: 'R$ 174,00', description: '', category: 'risotos', hot: false, popular: false },
        { id: 39, name: 'Lambe-Lambe', price: 'R$ 164,00', description: '', category: 'risotos', hot: false, popular: false },
        { id: 40, name: 'Risoto de Legumes', price: 'R$ 98,00', description: 'Abobrinha, cenoura, brócolis e palmito.', category: 'risotos', hot: false, popular: false },
        { id: 41, name: 'Lasanha Sabor e Mar', price: 'R$ 189,00', description: 'Deliciosa lasanha de linguado, banana da terra e molho branco, acompanha arroz com palmito e tomate salteado com ervas.', category: 'risotos', hot: false, popular: false },

        // Pratos com Carne
        { id: 42, name: 'Mignon Grelhado', price: 'R$ 210,00', description: 'Escalope de mignon grelhado, acompanha arroz branco, batata frita, farofa e vinagrete.', category: 'carnes', hot: false, popular: false },
        { id: 43, name: 'Medalhão de Mignon', price: 'R$ 219,00', description: 'Escalope de mignon envolto em uma fatia de bacon grelhado, acompanha arroz à grega, batata frita, farofa e vinagrete.', category: 'carnes', hot: false, popular: false },
        { id: 44, name: 'Mignon ao Catupiry', price: 'R$ 229,00', description: 'Escalope de mignon grelhado, coberto com catupiry e parmesão gratinado, acompanha arroz branco e batata frita.', category: 'carnes', hot: false, popular: false },
        { id: 45, name: 'Mignon Parmegiana', price: 'R$ 219,00', description: 'Mignon à milanesa coberto com mussarela, molho sugo e parmesão, acompanha arroz branco e batata frita.', category: 'carnes', hot: false, popular: false },
        { id: 46, name: 'Picanha Grelhada', price: 'R$ 238,00', description: 'Picanha grelhada, acompanha arroz branco, batata frita, farofa e vinagrete.', category: 'carnes', hot: false, popular: false },
        { id: 47, name: 'Picanha com Queijo Coalho', price: 'R$ 248,00', description: 'Picanha grelhada com queijo coalho selado e alho frito, acompanha arroz branco e batata frita.', category: 'carnes', hot: false, popular: false },
        { id: 48, name: 'Mignon Strogonoff', price: 'R$ 209,00', description: 'Iscas de mignon salteadas ao molho rosé, acompanha arroz branco e batata frita.', category: 'carnes', hot: false, popular: false },
        { id: 49, name: 'Mignon com Salada', price: 'R$ 187,00', description: 'Mignon grelhado, acompanha salada de alface, tomate, cebola roxa, pepino e palmito.', category: 'carnes', hot: false, popular: false },
        { id: 50, name: 'Ancho com Legumes', price: 'R$ 189,00', description: 'Ancho grelhado, acompanha arroz branco, legumes salteados na manteiga, farofa e vinagrete.', category: 'carnes', hot: false, popular: false },
        { id: 51, name: 'Ancho Sabor e Mar', price: 'R$ 210,00', description: 'Ancho grelhado coberto com molho roti e champignon, acompanha risoto de palmito e 4 tipos de ervas à base de leite de coco.', category: 'carnes', hot: false, popular: false },

        // Frango
        { id: 52, name: 'Frango Grelhado', price: 'R$ 109,00', description: 'Filé grelhado, acompanha arroz branco, batata frita, farofa e vinagrete.', category: 'frango', hot: false, popular: false },
        { id: 53, name: 'Frango ao Catupiry', price: 'R$ 134,00', description: 'Filé grelhado, gratinado com catupiry e parmesão, acompanha arroz branco e batata frita.', category: 'frango', hot: false, popular: false },
        { id: 54, name: 'Frango à Parmegiana', price: 'R$ 128,00', description: 'Filé à milanesa, coberto com mussarela, molho ao sugo e parmesão, acompanha arroz branco e batata frita.', category: 'frango', hot: false, popular: false },
        { id: 55, name: 'Frango com Salada', price: 'R$ 99,00', description: 'Filé grelhado, acompanha salada de alface, tomate, cebola, pepino e palmito, e arroz branco.', category: 'frango', hot: false, popular: false },
        { id: 56, name: 'Strogonoff de Frango', price: 'R$ 124,00', description: 'Iscas de frango salteadas ao molho rosé, acompanha arroz branco e farofa.', category: 'frango', hot: false, popular: false },

        // Pescados
        { id: 57, name: 'À Dorê (Pescada)', price: 'R$ 119,00', description: 'Acompanha arroz branco e batata sauté.', category: 'pescados', hot: false, popular: false },
        { id: 58, name: 'À Dorê (Linguado)', price: 'R$ 140,00', description: 'Acompanha arroz branco e batata sauté.', category: 'pescados', hot: false, popular: false },
        { id: 59, name: 'À Milanesa (Pescada)', price: 'R$ 125,00', description: 'Acompanha arroz à grega e batata frita.', category: 'pescados', hot: false, popular: false },
        { id: 60, name: 'À Milanesa (Linguado)', price: 'R$ 155,00', description: 'Acompanha arroz à grega e batata frita.', category: 'pescados', hot: false, popular: false },
        { id: 61, name: 'Ao Molho de Camarão (Pescada)', price: 'R$ 150,00', description: 'À dorê, coberto com molho de camarão, acompanha arroz branco e pirão.', category: 'pescados', hot: false, popular: false },
        { id: 62, name: 'Ao Molho de Camarão (Linguado)', price: 'R$ 180,00', description: 'À dorê, coberto com molho de camarão, acompanha arroz branco e pirão.', category: 'pescados', hot: false, popular: false },
        { id: 63, name: 'À Parmegiana (Pescada)', price: 'R$ 149,00', description: 'À milanesa, gratinado com mussarela, molho sugo e parmesão, acompanha arroz branco e batata frita.', category: 'pescados', hot: false, popular: false },
        { id: 64, name: 'À Parmegiana (Linguado)', price: 'R$ 179,00', description: 'À milanesa, gratinado com mussarela, molho sugo e parmesão, acompanha arroz branco e batata frita.', category: 'pescados', hot: false, popular: false },
        { id: 65, name: 'À Dorê ou à Milanesa com Salada (Pescada)', price: 'R$ 98,00', description: 'Acompanha alface, tomate, cebola, pepino, palmito e arroz branco.', category: 'pescados', hot: false, popular: false },
        { id: 66, name: 'À Dorê ou à Milanesa com Salada (Linguado)', price: 'R$ 128,00', description: 'Acompanha alface, tomate, cebola, pepino, palmito e arroz branco.', category: 'pescados', hot: false, popular: false },

        // Pratos com Cambucu
        { id: 67, name: 'Cambucu à Caiçara', price: 'R$ 198,00', description: 'Filé espalmado, recheado com banana da terra grelhada, empanado e frito, acompanha arroz de mexilhão com ervas e palmito selado na manteiga.', category: 'cambucu', hot: false, popular: false },
        { id: 68, name: 'Cambucu Sabor e Mar', price: 'R$ 188,00', description: 'Filé grelhado, coberto com camarão grande, lula e mexilhão à provençal, acompanha arroz branco e batata corada.', category: 'cambucu', hot: false, popular: false },
        { id: 69, name: 'Cambucu à Belle Meunière', price: 'R$ 184,00', description: 'Filé grelhado, coberto com camarões pequenos, champignons e alcaparras salteadas na manteiga.', category: 'cambucu', hot: false, popular: false },
        { id: 70, name: 'Cambucu com Legumes', price: 'R$ 158,00', description: 'Filé grelhado, acompanha arroz branco e legumes salteados no azeite.', category: 'cambucu', hot: false, popular: false },
        { id: 71, name: 'Cambucu com Fritas e Salada', price: 'R$ 158,00', description: 'Filé grelhado, acompanha arroz branco, batata frita e salada simples.', category: 'cambucu', hot: false, popular: false },
        { id: 72, name: 'Cambucu Recheado', price: 'R$ 189,00', description: 'Filé empanado, recheado com catupiry e camarão, acompanha arroz à grega e batata frita.', category: 'cambucu', hot: false, popular: false },
        { id: 73, name: 'Cambucu ao Molho Branco', price: 'R$ 185,00', description: 'Filé grelhado, coberto com molho branco e champignons, gratinado com catupiry e parmesão.', category: 'cambucu', hot: false, popular: false },
        { id: 74, name: 'Cambucu com rolo de camarão', price: 'R$ 189,00', description: 'Filé grelhado, acompanha arroz branco e palmito selado na manteiga.', category: 'cambucu', hot: false, popular: false },

        // Moquecas, Caldeiradas e Paellas
        { id: 75, name: 'Moqueca de Peixe', price: 'R$ 210,00', description: 'Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.', category: 'moquecas', hot: false, popular: false },
        { id: 76, name: 'Moqueca Mista', price: 'R$ 270,00', description: 'Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.', category: 'moquecas', hot: false, popular: false },
        { id: 77, name: 'Moqueca de Camarão Branco', price: 'R$ 270,00', description: 'Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.', category: 'moquecas', hot: false, popular: false },
        { id: 78, name: 'Caldeirada Completa', price: 'R$ 590,00', description: 'Peixe, lula, mexilhão, camarão e polvo. Serve até 4 pessoas.', category: 'moquecas', hot: false, popular: false },
        { id: 79, name: 'Meia Caldeirada', price: 'R$ 260,00', description: 'Caldo à base de leite de coco, pimentões, tomate, cebola, dendê e coentro. Acompanha arroz branco, pirão e farofa de dendê.', category: 'moquecas', hot: false, popular: false },
        { id: 80, name: 'Paella Frutos do Mar', price: 'R$ 298,00', description: 'Camarões grandes e pequenos, lula nacional, polvo e mexilhão refogados e cozidos no próprio caldo com açafrão e arroz.', category: 'moquecas', hot: false, popular: false },
        { id: 81, name: 'Paella Vegana', price: 'R$ 98,00', description: 'Abobrinha, brócolis, cenoura e palmito refogados, cozidos no próprio caldo com açafrão e arroz.', category: 'moquecas', hot: false, popular: false },
        { id: 82, name: 'Polvo Sabor e Mar', price: 'R$ 239,00', description: 'Palmito palmiera real, polvo e camarões grandes salteados com ervas, acompanha arroz branco, mandioca frita e banana da terra à provençal.', category: 'moquecas', hot: false, popular: false },

        // Pratos com Camarão Branco
        { id: 83, name: 'Fricassé de Camarão', price: 'R$ 210,00', description: 'Camarões grandes e pequenos refogados, cobertos com molho à base de catupiry e milho, gratinado com mussarela e coberto com batata palha, acompanha arroz com palmito.', category: 'camarao', hot: false, popular: false },
        { id: 84, name: 'Camarão Recheado', price: 'R$ 179,00', description: 'Camarões recheados com catupiry à milanesa, acompanha arroz à grega e mandioca.', category: 'camarao', hot: false, popular: false },
        { id: 85, name: 'Camarão na Moranga', price: 'R$ 218,00', description: 'Camarões refogados com um creme à base de moranga, gratinado com catupiry e parmesão, acompanha arroz branco e batata frita.', category: 'camarao', hot: false, popular: false },
        { id: 86, name: 'Bobó de Camarão', price: 'R$ 198,00', description: 'Camarões grandes e pequenos ao creme de mandioca, leite de coco e dendê, acompanha arroz branco e farofa de dendê.', category: 'camarao', hot: false, popular: false },
        { id: 87, name: 'Camarão no Cocô', price: 'R$ 178,00', description: 'Arroz cremoso feito com a própria água do coco, com camarões grandes e pequenos refogados no vinho branco, gratinado com parmesão.', category: 'camarao', hot: false, popular: false },
        { id: 88, name: 'Strogonoff de Camarão', price: 'R$ 178,00', description: 'Camarões grandes e pequenos salteados ao molho rosé, acompanha arroz branco e batata frita.', category: 'camarao', hot: false, popular: false },
        { id: 89, name: 'Chiclete de Camarão', price: 'R$ 219,00', description: 'Camarões grandes e pequenos refogados com um molho à base de coco, encorpado com mussarela, acompanha arroz branco e batata frita.', category: 'camarao', hot: false, popular: false },
        { id: 90, name: 'Parmegiana de Camarão', price: 'R$ 189,00', description: 'Camarões à milanesa, cobertos com mussarela, molho sugo e parmesão, acompanha arroz branco e batata frita.', category: 'camarao', hot: false, popular: false },

        // Salmão
        { id: 91, name: 'Salmão à Belle', price: 'R$ 249,00', description: 'Filé grelhado, coberto com camarão pequeno, champignon e alcaparras salteadas na manteiga.', category: 'salmao', hot: false, popular: false },
        { id: 92, name: 'Salmão com Legumes', price: 'R$ 179,00', description: 'Salmão grelhado, acompanha arroz e legumes (batata, cenoura, vagem, palmito e brócolis).', category: 'salmao', hot: false, popular: false },
        { id: 93, name: 'Salmão do Chefe', price: 'R$ 239,00', description: 'Salmão grelhado com camarão rosa, acompanha arroz com rúcula, tomate seco e palmito.', category: 'salmao', hot: false, popular: false },

        // Acompanhamentos
        { id: 94, name: 'Banana Provençal', price: 'R$ 28,00', description: 'Banana da terra à provençal.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 95, name: 'Pirão de Peixe', price: 'R$ 21,00', description: 'Pirão cremoso de peixe.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 96, name: 'Legumes na Manteiga', price: 'R$ 23,00', description: 'Legumes frescos refogados na manteiga.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 97, name: 'Palmito na Manteiga', price: 'R$ 60,00', description: 'Palmito palmiera real refogado na manteiga.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 98, name: 'Arroz', price: 'R$ 18,00', description: 'Arroz branco solto e saboroso.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 99, name: 'Feijão', price: 'R$ 15,00', description: 'Feijão tropeiro tradicional.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 100, name: 'Farofa', price: 'R$ 12,00', description: 'Farofa de mandioca crocante.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 101, name: 'Vinagrete', price: 'R$ 18,00', description: 'Vinagrete fresco de tomate e cebola.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 102, name: 'Arroz à Grega', price: 'R$ 21,00', description: 'Arroz com legumes e ervas finas.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 103, name: 'Purê', price: 'R$ 28,00', description: 'Purê de batata cremoso.', category: 'acompanhamentos', hot: false, popular: false },
        { id: 104, name: 'Batata Sauté', price: 'R$ 24,00', description: 'Batatas douradas e crocantes.', category: 'acompanhamentos', hot: false, popular: false },

        // Café da Manhã
        { id: 105, name: 'Café Puro', price: 'R$ 6,00', description: '', category: 'cafe', hot: false, popular: false },
        { id: 106, name: 'Café com Leite', price: 'R$ 8,00', description: '', category: 'cafe', hot: false, popular: false },
        { id: 107, name: 'Achocolatado com Leite (Ovomaltine)', price: 'R$ 10,00', description: '', category: 'cafe', hot: false, popular: false },
        { id: 108, name: 'Pão com Manteiga', price: 'R$ 6,00', description: '', category: 'cafe', hot: false, popular: false },
        { id: 109, name: 'Pão com Ovo', price: 'R$ 8,00', description: '', category: 'cafe', hot: false, popular: false },
        { id: 110, name: 'Mistão Quente', price: 'R$ 16,00', description: '', category: 'cafe', hot: false, popular: false },
        { id: 111, name: 'Pão de Queijo', price: 'R$ 16,00', description: '', category: 'cafe', hot: false, popular: false },
        { id: 112, name: 'Tapioca', price: 'R$ 16,00', description: '', category: 'cafe', hot: false, popular: false },
        { id: 113, name: 'Pão com Requeijão na Chapa', price: 'R$ 14,00', description: '', category: 'cafe', hot: false, popular: false },
        { id: 114, name: 'Pão com Mortadela e Queijo', price: 'R$ 16,00', description: '', category: 'cafe', hot: false, popular: false },

        // Sucos
        { id: 115, name: 'Suco de Abacaxi', price: 'R$ 16,90', description: '', category: 'sucos', hot: false, popular: false },
        { id: 116, name: 'Suco de Laranja', price: 'R$ 14,90', description: '', category: 'sucos', hot: false, popular: false },
        { id: 117, name: 'Suco de Morango', price: 'R$ 16,90', description: '', category: 'sucos', hot: false, popular: false },
        { id: 118, name: 'Suco de Maracujá', price: 'R$ 16,90', description: '', category: 'sucos', hot: false, popular: false },
        { id: 119, name: 'Suco de Limão', price: 'R$ 14,90', description: '', category: 'sucos', hot: false, popular: false },
        { id: 120, name: 'Suco de Manga', price: 'R$ 16,90', description: '', category: 'sucos', hot: false, popular: false },
        { id: 121, name: 'Suco com Leite', price: 'R$ 18,90', description: '', category: 'sucos', hot: false, popular: false },
        { id: 122, name: 'Suco de Laranja com Cenoura', price: 'R$ 18,90', description: '', category: 'sucos', hot: false, popular: false },
        { id: 123, name: 'Garrafa de Suco (750 ml)', price: 'R$ 32,00', description: '', category: 'sucos', hot: false, popular: false },

        // Refrigerantes
        { id: 124, name: 'Guaraná', price: 'R$ 9,50', description: '', category: 'refrigerantes', hot: false, popular: false },
        { id: 125, name: 'Coca-Cola', price: 'R$ 9,50', description: '', category: 'refrigerantes', hot: false, popular: false },
        { id: 126, name: 'Coca-Cola Zero', price: 'R$ 9,50', description: '', category: 'refrigerantes', hot: false, popular: false },
        { id: 127, name: 'Fanta Uva', price: 'R$ 9,50', description: '', category: 'refrigerantes', hot: false, popular: false },
        { id: 128, name: 'Fanta Laranja', price: 'R$ 9,50', description: '', category: 'refrigerantes', hot: false, popular: false },
        { id: 129, name: 'Soda Limonada', price: 'R$ 9,50', description: '', category: 'refrigerantes', hot: false, popular: false },
        { id: 130, name: 'Tônica', price: 'R$ 9,50', description: '', category: 'refrigerantes', hot: false, popular: false },
        { id: 131, name: 'Guaraná Jesus', price: 'R$ 9,50', description: '', category: 'refrigerantes', hot: false, popular: false },
        { id: 132, name: 'Energético Monster', price: 'R$ 19,90', description: '', category: 'refrigerantes', hot: false, popular: false },
        { id: 133, name: 'Água com Gás', price: 'R$ 6,50', description: '', category: 'refrigerantes', hot: false, popular: false },
        { id: 134, name: 'Água sem Gás', price: 'R$ 6,50', description: '', category: 'refrigerantes', hot: false, popular: false },

        // Doses (Aperitivos)
        { id: 135, name: 'Velho Barreiro', price: 'R$ 6,00', description: '', category: 'doses', hot: false, popular: false },
        { id: 136, name: 'Oren', price: 'R$ 14,50', description: '', category: 'doses', hot: false, popular: false },
        { id: 137, name: 'Absolut', price: 'R$ 29,90', description: '', category: 'doses', hot: false, popular: false },
        { id: 138, name: 'Red Label', price: 'R$ 22,90', description: '', category: 'doses', hot: false, popular: false },
        { id: 139, name: 'Black Label', price: 'R$ 35,90', description: '', category: 'doses', hot: false, popular: false },
        { id: 140, name: 'Campari', price: 'R$ 18,50', description: '', category: 'doses', hot: false, popular: false },
        { id: 141, name: 'São Francisco', price: 'R$ 11,50', description: '', category: 'doses', hot: false, popular: false },
        { id: 142, name: 'Licor 43', price: 'R$ 19,90', description: '', category: 'doses', hot: false, popular: false },
        { id: 143, name: 'Seleta', price: 'R$ 8,00', description: '', category: 'doses', hot: false, popular: false },

        // Cervejas
        { id: 144, name: 'Heineken (Long Neck)', price: 'R$ 14,90', description: '', category: 'cervejas', hot: false, popular: false },
        { id: 145, name: 'Corona (Long Neck)', price: 'R$ 14,90', description: '', category: 'cervejas', hot: false, popular: false },
        { id: 146, name: 'Stella Artois (Long Neck)', price: 'R$ 13,90', description: '', category: 'cervejas', hot: false, popular: false },
        { id: 147, name: 'Eisenbahn (Long Neck)', price: 'R$ 13,90', description: '', category: 'cervejas', hot: false, popular: false },
        { id: 148, name: 'Heineken 0,0 (não alcóolica)', price: 'R$ 12,90', description: '', category: 'cervejas', hot: false, popular: false },
        { id: 149, name: 'Original (600ml)', price: 'R$ 18,90', description: '', category: 'cervejas', hot: false, popular: false },
        { id: 150, name: 'Brahma (600ml)', price: 'R$ 16,90', description: '', category: 'cervejas', hot: false, popular: false },
        { id: 151, name: 'Estrella Galicia (600ml)', price: 'R$ 16,90', description: '', category: 'cervejas', hot: false, popular: false },
        { id: 152, name: 'Antarctica (600ml)', price: 'R$ 12,90', description: '', category: 'cervejas', hot: false, popular: false },
        { id: 153, name: 'Petra (600ml)', price: 'R$ 13,90', description: '', category: 'cervejas', hot: false, popular: false },

        // Drinks
        { id: 154, name: 'Caipirinha de Cachaça', price: 'R$ 24,90', description: '', category: 'drinks', hot: false, popular: false },
        { id: 155, name: 'Caipirinha de Saquê', price: 'R$ 29,90', description: '', category: 'drinks', hot: false, popular: false },
        { id: 156, name: 'Caipiroska', price: 'R$ 34,90', description: '', category: 'drinks', hot: false, popular: false },
        { id: 157, name: 'Negroni', price: 'R$ 39,90', description: '', category: 'drinks', hot: false, popular: false },
        { id: 158, name: 'Sex on the Beach', price: 'R$ 32,90', description: '', category: 'drinks', hot: false, popular: false },
        { id: 159, name: 'Piña Colada', price: 'R$ 32,90', description: '', category: 'drinks', hot: false, popular: false },
        { id: 160, name: 'Lagoa Azul', price: 'R$ 28,90', description: '', category: 'drinks', hot: false, popular: false },
        { id: 161, name: 'Gin Tônica', price: 'R$ 31,90', description: '', category: 'drinks', hot: false, popular: false },
        { id: 162, name: 'Whisky com Cerveja', price: 'R$ 24,90', description: '', category: 'drinks', hot: false, popular: false },
        { id: 163, name: 'Cosmopolitan', price: 'R$ 38,90', description: '', category: 'drinks', hot: false, popular: false },
        { id: 164, name: 'Mojito', price: 'R$ 31,90', description: '', category: 'drinks', hot: false, popular: false },
        
        // Pratos Executivos
        { id: 165, name: 'Bife a Cavalo', price: 'R$ 45,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 166, name: 'Omelete com Queijo', price: 'R$ 35,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 167, name: 'Filé de Frango Grelhado', price: 'R$ 32,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 168, name: 'Filé de Frango Empanado', price: 'R$ 35,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 169, name: 'Parmegiana de Frango', price: 'R$ 38,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 170, name: 'Parmegiana de Mignon', price: 'R$ 52,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 171, name: 'Parmegiana de Linguado', price: 'R$ 48,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 172, name: 'Tilápia à Dorê', price: 'R$ 46,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 173, name: 'Panqueca (mexilhão, camarão, frango ou carne)', price: 'R$ 52,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 174, name: 'Espaguete à Almôndega', price: 'R$ 44,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 175, name: 'Frango com Creme de Milho', price: 'R$ 42,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 176, name: 'Strogonoff de Carne', price: 'R$ 52,00', description: '', category: 'executivos', hot: false, popular: false },
        { id: 177, name: 'Strogonoff de Frango', price: 'R$ 38,00', description: '', category: 'executivos', hot: false, popular: false }
    ];

    const categories = [
        { id: 'entradas', name: 'Entradas e Porções' },
        { id: 'saladas', name: 'Saladas' },
        { id: 'cafe', name: 'Café da Manhã' },
        { id: 'sucos', name: 'Sucos' },
        { id: 'refrigerantes', name: 'Refrigerantes' },
        { id: 'massas', name: 'Massas' },
        { id: 'risotos', name: 'Risotos' },
        { id: 'carnes', name: 'Pratos com Carne' },
        { id: 'frango', name: 'Frango' },
        { id: 'pescados', name: 'Pescados' },
        { id: 'cambucu', name: 'Pratos com Cambucu' },
        { id: 'moquecas', name: 'Moquecas, Caldeiradas e Paellas' },
        { id: 'camarao', name: 'Pratos com Camarão Branco' },
        { id: 'salmao', name: 'Salmão' },
        { id: 'acompanhamentos', name: 'Acompanhamentos' },
        { id: 'doses', name: 'Doses (Aperitivos)' },
        { id: 'cervejas', name: 'Cervejas' },
        { id: 'drinks', name: 'Drinks' },
        { id: 'executivos', name: 'Pratos Executivos' },
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
    
    // Event listeners para as setas do carrossel
    arrowLeft.addEventListener('click', () => scrollCarousel('left'));
    arrowRight.addEventListener('click', () => scrollCarousel('right'));
    
    // Atualiza as setas quando o carrossel rola
    categoryButtonsContainer.addEventListener('scroll', updateArrows);
    
    // Atualiza as setas quando a janela é redimensionada
    window.addEventListener('resize', updateArrows);
    
    renderCategoryButtons();
    renderMenu();
    
    // Atualiza as setas após o carregamento completo
    setTimeout(updateArrows, 100);
    setTimeout(updateArrows, 500);
});
