'use strict';

var Header = {
    props: {
        logo: {
            type: String,
            default: './img/logo1.png'
        },
        time: {
            type: Object,
            default: {
                date: '',
                day: '',
                time: ''
            }
        },
        weather: {
            type: Object,
            default: {
                city: '',
                type: '',
                temperature: ''
            }
        }
    },
    template: '<section><div class="weather">' + '<span v-text="weather.type"></span>' + '<span v-text="weather.temperature"></span>' + '<span v-text="weather.city"></span></div>' + '<img :src="logo" class="logo">' + '<div class="time">' + '<span v-text="time.date"></span><span v-text="time.day"></span><span v-text="time.time"></span>' + '</div>' + '</section>'
};