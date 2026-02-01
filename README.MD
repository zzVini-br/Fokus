Focus Timer e Gerenciador de Tarefas
Descrição do Projeto

Este projeto é uma aplicação de gerenciamento de tempo baseada na técnica Pomodoro, integrada a uma lista de tarefas dinâmica. O usuário pode alternar entre períodos de foco, descanso curto e descanso longo, enquanto gerencia tarefas que podem ser editadas, selecionadas para execução e marcadas como concluídas.

O projeto foi desenvolvido como parte da formação em Front-End da Alura, focando na manipulação do DOM, gerenciamento de estados com JavaScript e persistência de dados localmente.
Funcionalidades Principais

    Temporizador customizado: Alternância de contextos (foco, descanso curto e longo) com alteração visual de cores, imagens e textos.

    Sistema de Tarefas: Criação de tarefas com armazenamento no LocalStorage para persistência após o fechamento do navegador.

    Edição em tempo real: Permite renomear tarefas existentes através de prompts de interação.

    Seleção de Foco: Ao clicar em uma tarefa, ela é destacada como a tarefa ativa no banner principal do temporizador.

    Eventos Customizados: O sistema comunica a conclusão de um ciclo de foco para a lista de tarefas, marcando a tarefa ativa como concluída automaticamente.

    Gerenciamento de Áudio: Feedback sonoro para início, pausa e finalização dos ciclos, além de opção de música de fundo.

Tecnologias Utilizadas

    HTML5: Estruturação semântica da aplicação.

    CSS3: Estilização e transições de estado visual (classes active e hidden).

    JavaScript (ES6+): Lógica de programação, manipulação de eventos, objetos de áudio e API de LocalStorage.

Estrutura de Arquivos

    Variáveis de Estado: Gerenciamento de listas de tarefas e controle de intervalos do cronômetro.

    Funções de DOM: Criação dinâmica de elementos HTML para a lista de tarefas.

    Event Listeners: Captura de interações do usuário para controle do fluxo da aplicação.

    Custom Events: Utilização de new CustomEvent para desacoplar a lógica do temporizador da lógica da lista de tarefas.

Como Executar

    Clone o repositório.

    Certifique-se de que a estrutura de pastas /imagens e /sons esteja presente na raiz do projeto conforme referenciado no código.

    Abra o arquivo index.html em um navegador moderno.

Créditos

Projeto desenvolvido com fins educativos sob a orientação da plataforma Alura.
