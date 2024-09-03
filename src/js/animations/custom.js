
barba.init({
    transitions: [{
        name: 'prueba',
        leave: function(data){
            let done = this.async();
            document.body.classList.add('loading');
            setTimeout(function (){
                done();
            }, 900);
        },
        enter:
            function(data){
                let done = this.async();
                document.body.classList.add('loading');
                setTimeout(function (){
                    done();
                }, 900);
            }
    }]
})