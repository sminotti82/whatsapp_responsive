const app = new Vue({
    el:'#root',
    data:{
        ricercaUtente:'',
        nuovoMessaggio:'',
         nomeUser:'Sebastiano Minotti',
         avatarUser:'img/avatar_io.jpg',
         contatore:0,
         risposte:[
            'ok','va bene','sto imparando','speriamo','oggi come stai ?','amo il sushi','gli iphone sono i migliori','amo le serie di fantascienza',
            'fringe','amo i cani','ma anche i gatti mi piacciono'
         ],
         contacts: [
            {
              name: "michele",
              stato:'sono juventino e me ne pento',
              lastAccess:'21:00',
              avatar: "img/avatar_1.jpg",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 11:03",
                  text: "Hai portato a spasso il cane?",
                  status: "sent",
                  menuVisible: false,
                },
                {
                  date: "10/01/2020 15:50",
                  text: "Ricordati di dargli da mangiare",
                  status: "sent",
                  menuVisible: false,
                },
                {
                  date: "10/01/2020 16:15",
                  text: "Tutto fatto!",
                  status: "received",
                  menuVisible: false,
                },
              ],
            },
            {
              name: "fabio",
              stato:'mi piace la pizza',
              lastAccess:'20:00',
              avatar: "img/avatar_8.jpg",
              visible: true,
              messages: [
                {
                  date: "20/03/2020 16:30",
                  text: "Ciao come stai?",
                  status: "sent",
                  menuVisible: false,
                },
                {
                  date: "20/03/2020 16:30",
                  text: "Bene grazie! Stasera ci vediamo?",
                  status: "received",
                  menuVisible: false,
                },
                {
                  date: "20/03/2020 16:35",
                  text: "Mi piacerebbe ma devo andare a fare la spesa.",
                  status: "sent",
                  menuVisible: false,
                },
              ],
            },
            {
              name: "samuele",
              stato:'la filosofica la amo ',
              lastAccess:'16:00',
              avatar: "img/avatar_3.jpg",
              visible: true,
              messages: [
                {
                  date: "28/03/2020 10:01",
                  text: "La Marianna va in campagna",
                  status: "received",
                  menuVisible: false,
                },
                {
                  date: "28/03/2020 10:20",
                  text: "Sicuro di non aver sbagliato chat?",
                  status: "sent",
                  menuVisible: false,
                },
                {
                  date: "28/03/2020 16:15:22",
                  text: "Ah scusa!",
                  status: "received",
                  menuVisible: false,
                },
              ],
            },
            {
              name: "luisa",
              stato:'voglio l\'estate', 
              lastAccess:'17:30',
              avatar: "img/avatar_9.jpg",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30",
                  text: "Lo sai che ha aperto una nuova pizzeria?",
                  status: "sent",
                  menuVisible: false,
                },
                {
                  date: "10/01/2020 15:50",
                  text: "Si, ma preferirei andare al cinema",
                  status: "received",
                  menuVisible: false,
                },
              ],
            },
          ],

        
    },
    methods:{

           selected:function(index){
            this.contatore=index
           },
           ricerca:function(){
            this.contacts.forEach(element => {
                   
                 element.name.includes(this.ricercaUtente)?element.visible=true:element.visible=false
            });
           },

           nuovo:function(){

                let New={
                    status:'sent',
                    date:dayjs().format('DD/MM/YYYY hh:mm'),
                    text:this.nuovoMessaggio
                }

                this.contacts[this.contatore].messages.push(New),
                this.nuovoMessaggio=''

                  setTimeout(this.risposta,2000)
           },

           risposta:function(){
              let reply={
                  status:'received',
                  date:dayjs().format('DD/MM/YYYY hh:mm'),
                  text:this.risposte[this.repli(0,this.risposte.length -1)]
              }
              this.contacts[this.contatore].messages.push(reply)
           },

           repli:function(min, max){
             return Math.floor(Math.random()*(max-min +1)+min)
           }


      }
})