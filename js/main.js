const DateTime = luxon.DateTime;

const wpmain = new Vue({
    el: '#app',
    data: {

        indexContact: 0,
        text: '',
        searchBar: '',
        contacts: [
            {
                name: "Michele",
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },
                ],
            },
            {
                name: "Fabio",
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: "20/03/2020 16:30:00",
                        text: "Ciao come stai?",
                        status: "sent",
                    },
                    {
                        date: "20/03/2020 16:30:55",
                        text: "Bene grazie! Stasera ci vediamo?",
                        status: "received",
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Mi piacerebbe ma devo andare a fare la spesa.",
                        status: "sent",
                    },
                ],
            },

            {
                name: "Samuele",
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: "28/03/2020 10:10:40",
                        text: "La Marianna va in campagna",
                        status: "received",
                    },
                    {
                        date: "28/03/2020 10:20:10",
                        text: "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                    },
                    {
                        date: "28/03/2020 16:15:22",
                        text: "Ah scusa!",
                        status: "received",
                    },
                ],
            },
            {
                name: "Alessandro B.",
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                    },
                ],
            },
            {
                name: "Alessandro L.",
                avatar: 'img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Va bene, stasera la sento',
                        status: 'received'
                    },
                ],
            },
            {
                name: "Claudia",
                avatar: 'img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        text: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: "Federico",
                avatar: 'img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    },

                ],
            },
            {
                name: "Davide",
                avatar: 'img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        text: 'OK!!',
                        status: 'sent'
                    },

                ],
            },
        ]
    },
    created() {

    },
    methods: {
        getLastMessage(index) {
            let lastMessage = this.contacts[index].messages.length - 1;
            let lastMessageText = this.contacts[index].messages[lastMessage].text;

            return lastMessageText;
        },
        getLastDate(index) {
            let lastMessage = this.contacts[index].messages.length - 1;
            let lastMessageDate = this.contacts[index].messages[lastMessage].date;

            return lastMessageDate;
        },
        changeContact(index) {
            this.indexContact = index;
        },
        getText() {
            if (this.text != '') {
                this.contacts[this.indexContact].messages.push({
                    text: this.text,
                    status: "sent",
                    date: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
                });
            }
            this.text = '';

            setTimeout(() => {
                this.contacts[this.indexContact].messages.push({
                    text: 'ok',
                    status: "received",
                    date: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
                }
                );
            }, 1000);
        },
        searchMyFriends() {
            if (this.searchBar !== '') {
                return this.contacts.filter(element =>
                    (element.name).toLowerCase().includes(this.searchBar.toLowerCase())
                );
            } else {
                return this.contacts;
            }
        },
    },
});