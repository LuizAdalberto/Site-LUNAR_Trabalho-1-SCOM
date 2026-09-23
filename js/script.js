// === Lógica de Alternância do Menu em Dispositivos Móveis ===
        const menuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');

        // Escuta o clique no ícone "Hambúrguer", alternando a classe para exibir ou ocultar os links
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('menu-aberto');
        });

        // Adiciona funcionalidade para fechar automaticamente o menu mobile assim que o utilizador clicar num link interno
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('menu-aberto');
            });
        });

        // === Função Responsável por Gerir o Avanço e Recuo do Carrossel de PESQUISAS ===
        let slidePesquisa = 0;
        function moverCarrosselPesquisa(direcao) {
            const inner = document.getElementById('carouselPesquisa');
            if (!inner) return;
            const totalSlides = inner.querySelectorAll('.carousel-item').length;
            // A fórmula matemática a seguir permite o loop infinito (regressar ao fim se estiver no início e vice-versa)
            slidePesquisa = (slidePesquisa + direcao + totalSlides) % totalSlides;
            // Altera visualmente a posição do grupo usando translações no eixo horizontal (X)
            inner.style.transform = `translateX(-${slidePesquisa * 100}%)`;
        }

        // === Função Responsável por Gerir o Avanço e Recuo do Carrossel de COMPETIÇÕES ===
        let slideCompeticao = 0;
        function moverCarrosselCompeticao(direcao) {
            const inner = document.getElementById('carouselCompeticao');
            if (!inner) return;
            const totalSlides = inner.querySelectorAll('.carousel-item').length;
            slideCompeticao = (slideCompeticao + direcao + totalSlides) % totalSlides;
            inner.style.transform = `translateX(-${slideCompeticao * 100}%)`;
        }

        // Configuração de temporizador global para garantir que todos os carrosséis da página mudem de forma automática e síncrona a cada 10 segundos
        setInterval(function() {
            moverCarrosselPesquisa(1);
            moverCarrosselCompeticao(1);
        }, 10000);

        // === Lógica do Menu "ScrollSpy": Atualiza automaticamente a indicação visual de qual seção da página está sendo vista ===
        document.addEventListener("DOMContentLoaded", () => {
            // Mapeia todas as opções de navegação e as respectivas seções em página
            const navLinks = document.querySelectorAll(".nav-links a");
            const sections = document.querySelectorAll("section[id], .hero[id]");

            function atualizarMenu() {
                let current = "";

                // Durante o scroll, calcula qual é a secção atual levando em consideração o tamanho da barra fixa que esconde parte do ecrã
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    // Compensação de 150px devido à barra presa no topo
                    if (pageYOffset >= sectionTop - 150) {
                        current = section.getAttribute("id");
                    }
                });

                // Varre a lista de links, remove a indicação ativa dos que não estão a ser vistos e realça o que bateu com a secção atual
                navLinks.forEach((link) => {
                    link.classList.remove("ativo");
                    if (link.getAttribute("href") === `#${current}`) {
                        link.classList.add("ativo");
                    }
                });
            }

            // Atrela a função ao evento de rolar a janela
            window.addEventListener("scroll", atualizarMenu);
            
            // Força uma primeira verificação de imediato ao carregar, corrigindo recarregamentos a meio da página
            atualizarMenu();
        });

        // === Sistema de Gestão do Modal de Autenticação (Janela Pop-up para Entrar / Cadastrar) ===
        document.addEventListener("DOMContentLoaded", () => {
            const btnIconeTop = document.querySelector(".login-btn");
            const modal = document.getElementById("auth-modal");
            const btnClose = document.querySelector(".close-modal");

            const tabLogin = document.getElementById("tab-login");
            const tabRegister = document.getElementById("tab-register");
            const formLogin = document.getElementById("form-login");
            const formRegister = document.getElementById("form-register");

            // 1. Ao clicar no ícone de perfil no topo do site, previne que a página salte para o topo e abre o modal visualmente
            btnIconeTop.addEventListener("click", (e) => {
                e.preventDefault(); 
                modal.classList.add("open");
            });

            // 2. Remove o modal da visualização quando o usuário clica no 'X' superior
            btnClose.addEventListener("click", () => {
                modal.classList.remove("open");
            });

            // 3. Permite sair da tela de autenticação apenas clicando no fundo escuro fora da janela
            window.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.classList.remove("open");
                }
            });

            // 4. Alterna as propriedades CSS necessárias para apresentar a aba "Entrar" e o seu formulário correspondente, escondendo o de Cadastro
            tabLogin.addEventListener("click", () => {
                tabLogin.classList.add("active");
                tabRegister.classList.remove("active");
                formLogin.classList.add("active");
                formRegister.classList.remove("active");
            });

            // 5. Oposta à função anterior, prepara e exibe a visualização para o processo de "Cadastro", ocultando a de entrada de usuários registados
            tabRegister.addEventListener("click", () => {
                tabRegister.classList.add("active");
                tabLogin.classList.remove("active");
                formRegister.classList.add("active");
                formLogin.classList.remove("active");
            });
        });
        
        // === Medidor de Qualidade/Força de Criação de Senha ao Vivo ===
        const regPassword = document.getElementById("reg-password");
        const strengthText = document.getElementById("strength-text");
        const strengthBarFill = document.getElementById("strength-bar-fill");
        const reqLetters = document.getElementById("req-letters");
        const reqNumbers = document.getElementById("req-numbers");
        const reqSpecial = document.getElementById("req-special");

        // Escuta a cada carácter que o usuário digita no campo para conferir e atualizar a barra
        regPassword.addEventListener("input", () => {
            const val = regPassword.value;

            // Validações independentes utilizando ferramentas RegEx (Padrões de Texto) para procurar números, letras ou símbolos
            const hasLetters = /[a-zA-Z]/.test(val);
            const hasNumbers = /[0-9]/.test(val);
            const hasSpecial = /[^a-zA-Z0-9]/.test(val);

            // Marca visualmente na lista descritiva os tópicos alcançados com uma coloração verde (através da classe 'valid')
            reqLetters.classList.toggle("valid", hasLetters);
            reqNumbers.classList.toggle("valid", hasNumbers);
            reqSpecial.classList.toggle("valid", hasSpecial);

            // Restaura o medidor aos padrões caso o usuário apague tudo o que digitou
            if (val.length === 0) {
                strengthText.textContent = "-";
                strengthText.style.color = "var(--text-dim)";
                strengthBarFill.style.width = "0%";
                return;
            }

            // Sistema matemático simples para pontuar a complexidade baseada nos testes e no tamanho
            let score = 0;
            if (hasLetters) score++;
            if (hasNumbers) score++;
            if (hasSpecial) score++;
            if (val.length >= 8) score++; // Condição extra que beneficia senhas longas com mais de 8 dígitos

            // Altera o tamanho da barra interna preenchida, as descrições em texto e as cores usando Regras Condicionais:
            if (score <= 2) {
                // Configuração visual para Senha Fraca (Vermelho)
                strengthText.textContent = "Fraca";
                strengthText.style.color = "#ff4d4d";
                strengthBarFill.style.width = "33%";
                strengthBarFill.style.backgroundColor = "#ff4d4d";
            } else if (score === 3) {
                // Configuração visual para Senha Média (Amarelo)
                strengthText.textContent = "Média";
                strengthText.style.color = "#ffcc00";
                strengthBarFill.style.width = "66%";
                strengthBarFill.style.backgroundColor = "#ffcc00";
            } else {
                // Configuração visual para Senha Forte (Verde)
                strengthText.textContent = "Forte";
                strengthText.style.color = "#00ff88";
                strengthBarFill.style.width = "100%";
                strengthBarFill.style.backgroundColor = "#00ff88";
            }
        });