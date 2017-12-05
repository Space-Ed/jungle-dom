
## A conversion of all Freecode camp challenges into jungle

### Element

'''html
<h1>Hello World</h1>
'''

'''javascript
j('h1', "Hello World")
'''

### Styled h2 & p 

'''js
j('h2', { 
    head:{ style:'color:red'}, 
    body:"CatPhotoApp" }), 
j('p', 'Kitty ipsum dolor sit amet, shed everywhere
shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.')
'''

'''js
J.define('app' , j('cell', { view:j('dom:root', {
        head:{
            mount:'jungle-mount',
        },
        style: j('style', `
                .backdrop {
                    background-color: #120213;
                }

                .thick-green-border {
                   border-color: green;
                    border-width: 10px;
                    border-style: solid
                }  

               .red-text {
                   color:red;
               }

               .small-img {
                   width:100px;
               }
            `),
        content:j('div', {
            head:{class:'backdrop'},
            anon:[
            j('h2', {
                head:{
                    class:'red-text',
                }, 
                body:"CatPhotoApp"
            }),

            j('img', {
                head:{
                    class:'small-img thick-green-border',
                    src:"https://bit.ly/fcc-relaxing-cat",
                    alt:"A cute orange cat lying on its back. "
                }
            }), 

            j('p', {
                head: {class:'red-text'},
                anon: [
                    'Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.',
                    j('a', { head:{ href: 'http://freecatphotoapp.com'}, body:"link to some cat"}), 
                    'and some more text'
                ]
            }),

            j('p', {
                head: { class: 'red-text' },
                body: 'Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.'
            }),

            j('form', {
                head:{

                },
                anon:[
                    j('input',{
                        head:{required:true, type:'text', placeholder:'Input Here'}
                    }),
                    j('input',{
                        head:{type:'submit'},
                        body:'Push Me'
                    })
                ]
            }
            )

        ]})
    })
}))

'''