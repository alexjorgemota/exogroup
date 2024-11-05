let currentQuestion = 1;
let selectedMovieQ1 = null;
let selectedMovieQ2 = null;
let selectedMovieQ3 = null;
let finalLink = '';

const questionNumber = document.getElementById('question-number');
const progressDots = document.querySelectorAll('.dot');


/**
 * Selects a movie based on the current question, updates the selected movie,
 * loads movies for the next question, and shows the summary for the last question.
 *
 * Selecciona una película según la pregunta actual, actualiza la película seleccionada,
 * carga películas para la siguiente pregunta y muestra el resumen para la última pregunta.
 *
 * Seleciona um filme com base na pergunta atual, atualiza o filme selecionado,
 * carrega filmes para a próxima pergunta e mostra o resumo para a última pergunta.
 */
 

function selectMovie(question, movieTitle, movieLink) {
    if (question === 1) {
        selectedMovieQ1 = movieTitle;
        loadMoviesForQuestion(2, selectedMovieQ1);
        showNextQuestion(2);
    } else if (question === 2) {
        selectedMovieQ2 = movieTitle;
        loadMoviesForQuestion(3, selectedMovieQ2);
        showNextQuestion(3);
    } else {
        selectedMovieQ3 = movieTitle;
        finalLink = movieLink;
        showSummary();
    }
}



/**
 * Displays the next question, hides the current question, updates the current question number,
 * and updates the progress dots.
 *
 * Muestra la siguiente pregunta, oculta la pregunta actual, actualiza el número de la pregunta actual
 * y actualiza los puntos de progreso.
 *
 * Exibe a próxima pergunta, oculta a pergunta atual, atualiza o número da pergunta atual
 * e atualiza os pontos de progresso.
 */


function showNextQuestion(nextQuestion) {
    document.getElementById(`question-${currentQuestion}`).style.display = 'none';
    document.getElementById(`question-${nextQuestion}`).style.display = 'block';
    currentQuestion = nextQuestion;
    questionNumber.textContent = currentQuestion;

    // Atualizar os pontos de progresso
    progressDots.forEach((dot, index) => {
        dot.classList.toggle('active', index < currentQuestion);
    });
}



/**
 * Loads movies based on the previous selection for the specified question,
 * and creates a carousel structure for the movie options.
 *
 * Carga películas según la selección anterior para la pregunta especificada,
 * y crea una estructura de carrusel para las opciones de películas.
 *
 * Carrega filmes com base na seleção anterior para a pergunta especificada,
 * e cria uma estrutura de carrossel para as opções de filmes.
 */

function loadMoviesForQuestion(question, previousMovie) {
    const moviesContainer = document.getElementById(`movies-q${question}`);
    moviesContainer.innerHTML = '';

    let movies = [];
    if (question === 2) {
        if (previousMovie === 'Movie 1') {
            movies = [
                { title: 'Movie 1-1', image: 'images/movies/movie1-1.png', link: '#' },
                { title: 'Movie 1-2', image: 'images/movies/movie1-2.png', link: '#' },
                { title: 'Movie 1-3', image: 'images/movies/movie1-3.png', link: '#' }
            ];
        } else if (previousMovie === 'Movie 2') {
            movies = [
                { title: 'Movie 2-1', image: 'images/movies/movie2-1.png', link: '#' },
                { title: 'Movie 2-2', image: 'images/movies/movie2-2.png', link: '#' },
                { title: 'Movie 2-3', image: 'images/movies/movie2-3.png', link: '#' }
            ];
        } else if (previousMovie === 'Movie 3') {
            movies = [
                { title: 'Movie 3-1', image: 'images/movies/movie3-1.png', link: '#' },
                { title: 'Movie 3-2', image: 'images/movies/movie3-2.png', link: '#' },
                { title: 'Movie 3-3', image: 'images/movies/movie3-3.png', link: '#' }
            ];
        }
    } else if (question === 3) {
        if (previousMovie === 'Movie 1-1') {
            movies = [
                { title: 'Movie 1-1-1', image: 'images/movies/movie1-1-1.png', link: 'https://www.imdb.com/title/tt0213149/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_pearl%2520harbor' },
                { title: 'Movie 1-1-2', image: 'images/movies/movie1-1-2.png', link: 'https://www.imdb.com/title/tt6924650/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_midway' },
                { title: 'Movie 1-1-3', image: 'images/movies/movie1-1-3.png', link: 'https://www.imdb.com/title/tt7693316/?ref_=nv_sr_srsg_0_tt_2_nm_0_in_0_q_irm%25C3%25A3os%2520de%2520honra' }
            ];
        } else if (previousMovie === 'Movie 1-2') {
            movies = [
                { title: 'Movie 1-2-1', image: 'images/movies/movie1-2-1.png', link: 'https://www.imdb.com/title/tt0295701/?ref_=fn_al_tt_1' },
                { title: 'Movie 1-2-2', image: 'images/movies/movie1-2-2.png', link: 'https://www.imdb.com/title/tt5433140/?ref_=nv_sr_srsg_0_tt_7_nm_0_in_0_q_veloses%2520e%2520furiosos%252010' },
                { title: 'Movie 1-2-3', image: 'images/movies/movie1-2-3.png', link: 'https://www.imdb.com/title/tt1074638/?ref_=nv_sr_srsg_0_tt_1_nm_0_in_0_q_opera%25C3%25A7%25C3%25A3o%2520skyfall' }
            ];
        } else if (previousMovie === 'Movie 1-3') {
            movies = [
                { title: 'Movie 1-3-1', image: 'images/movies/movie1-3-1.png', link: 'https://www.imdb.com/title/tt1877830/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_batman' },
                { title: 'Movie 1-3-2', image: 'images/movies/movie1-3-2.png', link: 'https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_spider%2520man%2520no%2520way%2520home' },
                { title: 'Movie 1-3-3', image: 'images/movies/movie1-3-3.png', link: 'https://www.imdb.com/title/tt3107288/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_flash' }
            ];
        } else if (previousMovie === 'Movie 2-1') {
            movies = [
                { title: 'Movie 2-1-1', image: 'images/movies/movie2-1-1.png', link: 'https://www.imdb.com/title/tt15289042/?ref_=nv_sr_srsg_2_tt_8_nm_0_in_0_q_first%2520love' },
                { title: 'Movie 2-1-2', image: 'images/movies/movie2-1-2.png', link: 'https://www.imdb.com/title/tt1638002/?ref_=nv_sr_srsg_0_tt_1_nm_0_in_0_q_simplesmente%2520acontece' },
                { title: 'Movie 2-1-3', image: 'images/movies/movie2-1-3.png', link: 'https://www.imdb.com/title/tt13779362/?ref_=nv_sr_srsg_1_tt_8_nm_0_in_0_q_para%2520sempre' }
            ];
        } else if (previousMovie === 'Movie 2-2') {
            movies = [
                { title: 'Movie 2-2-1', image: 'images/movies/movie2-2-1.png', link: 'https://www.imdb.com/title/tt0416449/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_300' },
                { title: 'Movie 2-2-2', image: 'images/movies/movie2-2-2.png', link: 'https://www.imdb.com/title/tt4154796/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_avengers' },
                { title: 'Movie 2-2-3', image: 'images/movies/movie2-2-3.png', link: 'https://www.imdb.com/title/tt1211837/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_doctor%2520strange' }
            ];
        } else if (previousMovie === 'Movie 2-3') {
            movies = [
                { title: 'Movie 2-3-1', image: 'images/movies/movie2-3-1.png', link: 'https://www.imdb.com/title/tt1152836/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_inimigos%2520publicos' },
                { title: 'Movie 2-3-2', image: 'images/movies/movie2-3-2.png', link: 'https://www.imdb.com/title/tt4919268/?ref_=fn_al_tt_1' },
                { title: 'Movie 2-3-3', image: 'images/movies/movie2-3-3.png', link: 'https://www.imdb.com/title/tt0780571/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_mr%2520brooks' }
            ];
        } else if (previousMovie === 'Movie 3-1') {
            movies = [
                { title: 'Movie 3-1-1', image: 'images/movies/movie3-1-1.png', link: 'https://www.imdb.com/title/tt0787474/?ref_=nv_sr_srsg_0_tt_2_nm_1_in_0_q_boxtrolls' },
                { title: 'Movie 3-1-2', image: 'images/movies/movie3-1-2.png', link: 'https://www.imdb.com/title/tt6587640/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_trolls%2520word' },
                { title: 'Movie 3-1-3', image: 'images/movies/movie3-1-3.png', link: 'https://www.imdb.com/title/tt1623288/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_paranorman' }
            ];
        } else if (previousMovie === 'Movie 3-2') {
            movies = [
                { title: 'Movie 3-2-1', image: 'images/movies/movie3-2-1.png', link: 'https://www.imdb.com/title/tt0435761/?ref_=nv_sr_srsg_1_tt_7_nm_0_in_0_q_toy%2520story%25203' },
                { title: 'Movie 3-2-2', image: 'images/movies/movie3-2-2.png', link: 'https://www.imdb.com/title/tt0198781/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_monstros%2520sa' },
                { title: 'Movie 3-2-3', image: 'images/movies/movie3-2-3.png', link: 'https://www.imdb.com/title/tt1482459/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_o%2520lorax' }
            ];
        } else if (previousMovie === 'Movie 3-3') {
            movies = [
                { title: 'Movie 3-3-1', image: 'images/movies/movie3-3-1.png', link: 'https://www.imdb.com/title/tt1667889/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_a%2520era%2520do%2520gelo%25204' },
                { title: 'Movie 3-3-2', image: 'images/movies/movie3-3-2.png', link: 'https://www.imdb.com/title/tt0327084/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_o%2520sem%2520floresta' },
                { title: 'Movie 3-3-3', image: 'images/movies/movie3-3-3.png', link: 'https://www.imdb.com/title/tt0481499/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_croods' }
            ];
        }
    }

    
    const carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel');

    
    const prevButton = document.createElement('button');
    prevButton.classList.add('carousel-control', 'prev');
    prevButton.innerHTML = '❮';
    prevButton.onclick = () => slideCarousel(question, -1);
    carouselDiv.appendChild(prevButton);

    
    const carouselTrack = document.createElement('div');
    carouselTrack.classList.add('carousel-track');

    
    movies.forEach(movie => {
        const movieBtn = document.createElement('button');
        movieBtn.classList.add('movie-btn');
        movieBtn.innerHTML = `<img src="${movie.image}" alt="${movie.title}">`;
        movieBtn.onclick = () => selectMovie(question, movie.title, movie.link);
        carouselTrack.appendChild(movieBtn);
    });

    carouselDiv.appendChild(carouselTrack);

    
    const nextButton = document.createElement('button');
    nextButton.classList.add('carousel-control', 'next');
    nextButton.innerHTML = '❯';
    nextButton.onclick = () => slideCarousel(question, 1);
    carouselDiv.appendChild(nextButton);


    moviesContainer.appendChild(carouselDiv);
}

let currentSlide = 0;


/**
 * Slides the carousel left or right based on the direction provided.
 * Desliza o carrossel para a esquerda ou para a direita com base na direção fornecida.
 * Desliza o carrossel para a esquerda ou para a direita com base na direção fornecida.
 */

function slideCarousel(question, direction) {
    const carouselTrack = document.querySelector(`#question-${question} .carousel-track`);
    const movieBtns = document.querySelectorAll(`#question-${question} .movie-btn`);
    const movieWidth = movieBtns[0].clientWidth; // Largura de uma imagem
    const totalMovies = movieBtns.length; // Número total de imagens

    // Obtém a posição de rolagem atual
    const currentTransform = getComputedStyle(carouselTrack).transform;
    const currentTranslateX = new WebKitCSSMatrix(currentTransform).m41;

    // Calcula o índice atual com base na posição de rolagem
    const currentIndex = Math.abs(currentTranslateX / movieWidth);

    // Calcula a nova posição
    let newTranslateX = currentTranslateX + (direction * -movieWidth);
    let newIndex = currentIndex + direction;

    // Limita a rolagem para não ultrapassar os limites
    if (newIndex < 0) {
        newIndex = 0; // Limite na primeira posição
    } else if (newIndex >= totalMovies - 1) {
        newIndex = totalMovies - 1; // Limite na última posição
    }
    
    // Define a nova posição para o carrossel
    newTranslateX = -newIndex * movieWidth;
    carouselTrack.style.transform = `translateX(${newTranslateX}px)`;

    // Controla a visibilidade dos botões
    const prevButton = document.querySelector(`#question-${question} .carousel-control.prev`);
    const nextButton = document.querySelector(`#question-${question} .carousel-control.next`);

    // Oculta ou exibe o botão "voltar"
    prevButton.style.display = newIndex === 0 ? 'none' : 'inline-block';

    // Oculta ou exibe o botão "avançar"
    nextButton.style.display = newIndex === totalMovies - 1 ? 'none' : 'inline-block';
}


/**
 * Displays a final message and provides a link to the last movie chosen.
 *
 * Muestra un mensaje final y proporciona un enlace a la última película elegida.
 *
 * Exibe uma mensagem final e fornece um link para o último filme escolhido.
 */

function showSummary() {
    document.getElementById(`question-${currentQuestion}`).style.display = 'none';
    document.getElementById(`number-question`).style.display = 'none';

    const quizContainer = document.querySelector('.quiz-container');
    const summaryDiv = document.createElement('div');
    summaryDiv.classList.add('summary');
    
    // Define o conteúdo do resumo com o botão de redirecionamento
    summaryDiv.innerHTML = `
        <h3>WATCH NEW MOVIES FOR FREE!</h3>
        <p>Watch any movies online for free without ads!</p>
        <p>Have fun watching your favourite movies!</p>
        <button onclick="window.location.href='${finalLink}'">WATCH HERE!</button>
    `;

    quizContainer.appendChild(summaryDiv);
}
