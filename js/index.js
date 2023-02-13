
// collection of topics
const topics = [
    {
        title : 'Sequence & Strings',
        desc : 'A string is just a finite sequence where S is a set of characters. Strings denoted by putting the characters together, for the example 12345. Besides that, strings are the fundamental object of computer science. Everything discrete can be described as a string of characters.',
        link : 'factorial.html',
        type : 'Notes'
    },
    {
        title : 'Equivalence Relation',
        desc : 'An equivalence relation is a relationship on a set, generally denoted by. “∼”, that is reflexive, symmetric, and transitive for everything in the set.',
        link : 'factorial.html',
        type : 'Notes'
    },
    {
        title : 'Sets',
        desc : 'A set is the mathematical model for a collection of different things; a set contains elements or members, which can be mathematical objects of any kind: numbers, symbols, points in space, lines, other geometrical shapes, variables, or even other sets.',
        link : 'factorial.html',
        type : 'Notes'
    },
    {
        title : 'Matrices of Relations',
        desc : 'Sets and relation are interconnected with each other. The relation defines the relation between two given sets. If there are two sets available, then to check if there is any connection between the two sets, we use relations. For example, an empty relation denotes none of the elements in the two sets is same.',
        link : 'factorial.html',
        type : 'Notes'
    },
    {
        title : 'Search Sequence',
        desc : 'Any algorithm which solves the search problem, namely, to retrieve information stored within some data structure, or calculated in the search space of a problem domain, either with discrete or continuous values.',
        link : 'factorial.html',
        type : 'Algorithm'
    },
    {
        title : 'Magic Square',
        desc : 'In recreational mathematics, a square array of numbers, usually positive integers, is called a magic square if the sums of the numbers in each row, each column, and both main diagonals are the same.',
        link : 'factorial.html',
        type : 'Program'
    },
    {
        title : 'Pascal\'s Triangle',
        desc : 'In mathematics, Pascal\'s triangle is a triangular array of the binomial coefficients that arises in probability theory, combinatorics, and algebra. In much of the Western world, it is named after the French mathematician Blaise Pascal, although other mathematicians studied it centuries before him in India, Persia, China, Germany, and Italy.',
        link : 'factorial.html',
        type : 'Program'
    },
    {
        title : 'Hash Functions',
        desc : 'A Hash Function is a function that converts a given numeric or alphanumeric key to a small practical integer value. The mapped integer value is used as an index in the hash table. In simple terms, a hash function maps a significant number or string to a small integer that can be used as the index in the hash table.',
        link : 'factorial.html',
        type : 'Program'
    },
    {
        title : 'Quantifiers',
        desc : 'Quantifier is mainly used to show that for how many elements, a described predicate is true. It also shows that for all possible values or for some value(s) in the universe of discourse, the predicate is true or not.',
        link : 'factorial.html',
        type : 'Notes'
    },
    {
        title : 'Sum & Product Rules',
        desc : 'In mathematics, summation is the addition of a sequence of any kind of numbers, called addends or summands; the result is their sum or total. Product notation (also called pi notation) indicates repeated multiplication. This notation is very similar to summation notation. The only difference is that while summation notation expresses a pattern of sums (i.e. a sequence of numbers), product notation shows a pattern in products.',
        link : 'factorial.html',
        type : 'Notes'
    },
    {
        title : 'Complexity of Algorithm',
        desc : 'Algorithmic complexity is concerned about how fast or slow particular algorithm performs. We define complexity as a numerical function T(n) - time versus the input size n. We want to define time taken by an algorithm without depending on the implementation details.',
        link : 'factorial.html',
        type : 'Notes'
    }
];

// topic types and images
const topic_type = [ 'Algorithm', 'Program', 'Notes'];
const topic_imgs = [ 'assets/img/algorithm.png', 'assets/img/program.png', 'assets/img/notebook.png'];


$(document).ready(function() {

    /**
     * Click event to expand the topics in the homepage
     */
    $('#expand-topics').click(()=> {
        let root_node = $('.topic-content-container');
        for(let i = 0; i < 4; i++) {
            
            if (topics.length >= 1) {    // Check if we are still in bound in the array's length
                // Creates a box in the topics_d
                let link_node = createBoxLinkNode(topics[0].link);
                let container_node = $('<div></div>', {class: 'boxes'});

                container_node.append(boxImageType(topics[0].type));
                container_node.append(createBoxContentNode(topics[0].title, topics[0].desc));
                container_node.append(createBoxTypeNode(topics[0].type))
                link_node.append(container_node);
                root_node.append(link_node);
                topics.shift();   
            }
        }
    });


    // FOR TRUTH TABLE PAGE
    
    /**
     * Click event for truth table generator
     */
    $('#generate').click(() => {
        goLove();       // para sa'yo ito hahahaha
    });

    // CLICK EVENTS FOR TAB PAGES

    /**
     * Click events for tabs
     */
    let tabs = $('#language-tab').children();
    let code_panel = $('#code-tab').children();
    for(let index = 0; index < tabs.length; index++) {
        $(tabs[index]).click(() => {
            // set the active tab to inactive
            for(let i = 0; i < tabs.length; i++) {
                let current_tab = new String($(tabs[i]).attr('class'));
                if (current_tab.includes('active'))
                    $(tabs[i]).removeClass('active');
            }

            // hide the displayed panel
            for(let i = 0; i < code_panel.length; i++) {
                let current_panel = new String($(code_panel[i]).attr('class'));
                if(current_panel.includes('display-code')) {
                    $(code_panel[i]).removeClass('display-code');
                    $(code_panel[i]).addClass('hidden-code');
                }
            }
            
            // finally set the current tab to active
            $(tabs[index]).addClass('active');
            $(code_panel[index]).addClass('display-code');
        });
    }
}); 