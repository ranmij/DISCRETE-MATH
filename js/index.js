const topics = [
    {
        title : 'Sequence & Strings',
        desc : 'Sample Sample',
        link : 'factorial.html',
        type : 'Algorithm',
        img : 'assets/img/algorithm.png'
    },
    {
        title : 'Equivalence Relation',
        desc : 'Sample Sample',
        link : 'factorial.html',
        type : 'Algorithm',
        img : 'assets/img/algorithm.png'
    },
    {
        title : 'Sets',
        desc : 'Sample Sample',
        link : 'factorial.html',
        type : 'Algorithm',
        img : 'assets/img/algorithm.png'
    },
    {
        title : 'Matrices of Relations',
        desc : 'Sample Sample',
        link : 'factorial.html',
        type : 'Algorithm',
        img : 'assets/img/algorithm.png'
    },
    {
        title : 'Search Sequence',
        desc : 'Sample Sample',
        link : 'factorial.html',
        type : 'Algorithm',
        img : 'assets/img/algorithm.png'
    },
    {
        title : 'Magic Square',
        desc : 'Sample Sample',
        link : 'factorial.html',
        type : 'Algorithm',
        img : 'assets/img/algorithm.png'
    },
    {
        title : 'Pascal\'s Triangle',
        desc : 'Sample Sample',
        link : 'factorial.html',
        type : 'Algorithm',
        img : 'assets/img/algorithm.png'
    },
    {
        title : 'Hash Functions',
        desc : 'Sample Sample',
        link : 'factorial.html',
        type : 'Algorithm',
        img : 'assets/img/algorithm.png'
    },
    {
        title : 'Quantifiers',
        desc : 'Sample Sample',
        link : 'factorial.html',
        type : 'Algorithm',
        img : 'assets/img/algorithm.png'
    },
    {
        title : 'Sum & Product Rules',
        desc : 'Sample Sample',
        link : 'factorial.html',
        type : 'Algorithm',
        img : 'assets/img/algorithm.png'
    },
    {
        title : 'Complexity of Algorithm',
        desc : 'Sample Sample',
        link : 'factorial.html',
        type : 'Algorithm',
        img : 'assets/img/algorithm.png'
    }
];
// Truth Table Generator 


$(document).ready(function() {

    // Expand Click Event
    $('#expand-topics').click(()=> {
        let root_tag = $('.topic-content-container');
        for(let i = 0; i < 4; i++) {
            if (topics.length >= 1) {    // Check if we are still in bound in the array's length
                // Creates a box in the topics
                let link_tag = $('<a></a>').attr('href', topics[0].link);
                let img = $('<img>').attr({src: topics[0].img, alt: topics[0].type});
                let title = $('<h2></h2>').text(topics[0].title);
                let p_desc = $('<p></p>').text(topics[0].desc);
                let desc_c = $('<div></div>', {class : 'box-desc-content'}).append(title).append(p_desc);
                let type = $('<div></div>', {class: 'box-type', text: topics[0].type})
                let type_c = $('<div></div>', {class : 'box-type-content'}).append(type);
                let container = $('<div></div>', {class: 'boxes'});

                link_tag.append(container);
                container.append(img).append(desc_c).append(type_c);
                root_tag.append(link_tag);
                topics.shift();   
            }
        }
        console.log(topics.length)
    });
});