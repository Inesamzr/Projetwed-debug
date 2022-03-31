const app = Vue.createApp({
    data(){
        return{
            coachs : [],
            nameQ : ''
        }
    },
    created(){
        fetch('http://localhost:3000/api/stuff/coachs')
        .then(res => res.json())
        .then(data => {
            for(let i=0; i<data.length; i++){
                let coach = {
                    id : data[i].idcoach,
                    pseudo : data[i].pseudo,
                    biographie : data[i].biographie,
                    langue : data[i].langue,
                    prix : data[i].prix,
                    idjeu : data[i].jeu,
                    showBio : false,
                    show : true
                }
                this.coachs.push(coach)
            }
        })
    },
    methods : {
        MontrerBio(id){
            for(let i = 0; i<this.coachs.length; i++){
                if(this.coachs[i].id == id){
                    this.coachs[i].showBio = true
                }
                
            }
        },
        research(){
            let nom = this.nameQ ;  
            console.log(nom);
            let nonTrouve = true
            let indice =0
            while(indice<this.coachs.length & nonTrouve){
                if(this.coachs[indice].pseudo == nom){
                    nonTrouve = false 
                }
                else{
                    indice++
                }
            }

            for(let i=0; i < this.coachs.length; i++){
                this.coachs[i].show = false
            }

            if(indice<this.coachs.length){
                this.coachs[indice].show = true
            }
            else{
                alert('Aucun coach ne prote ce nom')
            }
        }
    }
})