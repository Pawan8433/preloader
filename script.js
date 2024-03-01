// After the preloader animation completes, add the 'show' class to the content container
        document.querySelector('.preloader').addEventListener('animationend', function () {
            document.querySelector('.content-container').classList.add('show');
        });