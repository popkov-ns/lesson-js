'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = document.querySelector('.promo__genre'),
          moverList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Add !!!');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, moverList);
        }

        event.target.reset();
    });
          
    const deleteAdv = (arr) => {
        adv.forEach(item => {
            item.remove();
        });
    }
    
    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    }

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(movieDB.movies);
        
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">
                    ${++i} ${film}
                </li>
                <div class="delete"></div>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, moverList);
            })
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, moverList);

});
