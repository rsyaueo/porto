import { defineStore } from "pinia";

const imageStore = defineStore({
    id: 'image',
    state: () => ({
        list: [
            {
                slug:'project1',
                title:'Project 1',
                img: '1.png'
            },
            {
                slug:'roti',
                title:'Roti',
                img: '2.png'
            },
            {
                slug:'salad',
                title:'Salad',
                img: '3.png'
            },
            {
                slug:'salad',
                title:'Salad',
                img: '4.png'
            },
        ]
    }),
    actions: {},
    getters: {
        g$list: ({ list }) => list,
        g$detail: ({list}) => {
            return (slug) => list.find((image) => image.slug = slug);
        }
    },
});

export default imageStore;