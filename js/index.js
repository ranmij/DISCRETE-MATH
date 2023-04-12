
// collection of topics
const topics = [
    {
        title : 'Sequence & Strings',
        desc : 'A string is just a finite sequence where S is a set of characters. Strings denoted by putting the characters together, for the example 12345. Besides that, strings are the fundamental object of computer science. Everything discrete can be described as a string of characters.',
        link : 'sequence-and-string.html',
        type : 'Notes'
    },
    {
        title : 'Equivalence Relation',
        desc : 'An equivalence relation is a relationship on a set, generally denoted by. “∼”, that is reflexive, symmetric, and transitive for everything in the set.',
        link : 'equivalence-relation.html',
        type : 'Notes'
    },
    {
        title : 'Sets',
        desc : 'A set is the mathematical model for a collection of different things; a set contains elements or members, which can be mathematical objects of any kind: numbers, symbols, points in space, lines, other geometrical shapes, letiables, or even other sets.',
        link : 'sets.html',
        type : 'Notes'
    },
    {
        title : 'Matrices',
        desc : 'Sets and relation are interconnected with each other. The relation defines the relation between two given sets. If there are two sets available, then to check if there is any connection between the two sets, we use relations. For example, an empty relation denotes none of the elements in the two sets is same.',
        link : 'matrices.html',
        type : 'Notes'
    },
    {
        title : 'Search Sequence',
        desc : 'Any algorithm which solves the search problem, namely, to retrieve information stored within some data structure, or calculated in the search space of a problem domain, either with discrete or continuous values.',
        link : 'search-algorithm.html',
        type : 'Algorithm'
    },
    {
        title : 'Magic Square',
        desc : 'In recreational mathematics, a square array of numbers, usually positive integers, is called a magic square if the sums of the numbers in each row, each column, and both main diagonals are the same.',
        link : 'magic-square.html',
        type : 'Program'
    },
    {
        title : 'Pascal\'s Triangle',
        desc : 'In mathematics, Pascal\'s triangle is a triangular array of the binomial coefficients that arises in probability theory, combinatorics, and algebra. In much of the Western world, it is named after the French mathematician Blaise Pascal, although other mathematicians studied it centuries before him in India, Persia, China, Germany, and Italy.',
        link : 'pascals-triangle.html',
        type : 'Program'
    },
    {
        title : 'Hash Functions',
        desc : 'A Hash Function is a function that converts a given numeric or alphanumeric key to a small practical integer value. The mapped integer value is used as an index in the hash table. In simple terms, a hash function maps a significant number or string to a small integer that can be used as the index in the hash table.',
        link : 'hash-functions.html',
        type : 'Program'
    },
    {
        title : 'Quantifiers',
        desc : 'Quantifier is mainly used to show that for how many elements, a described predicate is true. It also shows that for all possible values or for some value(s) in the universe of discourse, the predicate is true or not.',
        link : 'quantifiers.html',
        type : 'Notes'
    },
    {
        title : 'Sum & Product Rules',
        desc : 'In mathematics, summation is the addition of a sequence of any kind of numbers, called addends or summands; the result is their sum or total. Product notation (also called pi notation) indicates repeated multiplication. This notation is very similar to summation notation. The only difference is that while summation notation expresses a pattern of sums (i.e. a sequence of numbers), product notation shows a pattern in products.',
        link : 'sum-and-product-rules.html',
        type : 'Notes'
    },
    {
        title : 'Complexity of Algorithm',
        desc : 'Algorithmic complexity is concerned about how fast or slow particular algorithm performs. We define complexity as a numerical function T(n) - time versus the input size n. We want to define time taken by an algorithm without depending on the implementation details.',
        link : 'algorithm-complexity.html',
        type : 'Notes'
    }
];

// topic types and images
const topic_type = [ 'Algorithm', 'Program', 'Notes'];
const topic_imgs = [ 'assets/img/algorithm.png', 'assets/img/program.png', 'assets/img/notebook.png'];

// Functions for some pages

/**
 * To calculate the greatest common divisor of inputs
 * @param {*} num_x 
 * @param {*} num_y 
 * @returns num_y - the number of gcd of inputs
 */
const euclidean = (num_x, num_y) => {
    let r;
    while ((num_x % num_y) > 0)  {
        r = num_x % num_y;
        num_x = num_y;
        num_y = r;
    }
    return num_y;
}

/**
 * To generate a permutation of given string
 * @param {*} sequence string sequence
 * @param {*} lower_index lower index of string
 * @param {*} upper_index upper index of string
 */
const sequence_builder = (sequence, lower_index, upper_index) => {
    if(lower_index === upper_index) {
            let node = $('<li></li>').text(sequence.join(', ')).addClass('text-center list-group-item')
            $('#seq-table').append(node);
    } else
        for (let i = lower_index; i <= upper_index; i++) {
            [sequence[i], sequence[lower_index]] =  [sequence[lower_index], sequence[i]];
            sequence_builder(sequence, lower_index + 1, upper_index);
            [sequence[i], sequence[lower_index]] =  [sequence[lower_index], sequence[i]];
        }
}

const magic_square = (dimension) => {
    let magicSquare = Array(dimension).fill(0).map(x => Array(dimension).fill(0));

        let i = parseInt(dimension / 2);
        let j = dimension - 1;
        
        for (num = 1; num <= dimension * dimension;) {
            if (i == -1 && j == dimension)
            {
                j = dimension - 2;
                i = 0;
            }
            else {
                if (j == dimension)
                    j = 0;
                    
                if (i < 0)
                    i = dimension - 1;
            }
     
            if (magicSquare[i][j] != 0) {
                j -= 2;
                i++;
                continue;
            }
            else
                magicSquare[i][j] = num++;
            j++;
            i--;
        }

        let table_node = $('#magic-table');
        for (i = 0; i < dimension; i++) {
            let row_node = $('<tr></tr>')
            for (j = 0; j < dimension; j++) {
                let column_node = $('<td></td>').text(magicSquare[i][j]).addClass('text-center');
                row_node.append(column_node);
            }
            table_node.append(row_node);
        }
}

function pascal(rows, numToUse, emptyChar, DOMContainer) {
	var aRows = []
      , aCols = []
	  , iR = 0
	  , iC = 0
	  , num = numToUse || 1
	  , ins = null
	  , empty = emptyChar || null
	  , columns = rows + (rows - 1)
	  , startCol = Math.floor(columns / 2)
	  , topLeft
	  , topRight
	;

	// builds rows
	for (; iR < rows; iR++) {
		// build columns
		for (; iC < columns; iC++) {

			// if first row, we need a starting position (middle of table)
			if (iR === 0) {
				if (iC === startCol) {
					ins = num;
				} else {
					ins = null;
				}

			// not first row
			} else {
					topLeft = aRows[iR - 1][iC - 1];
					topRight = aRows[iR - 1][iC + 1];

					// checkered null cell
					if (topLeft == null && topRight == null) {
						ins = null;
					// right side cell with 1-sided value
					} else if (topLeft == null && topRight != null) {
						ins = topRight;
					// left side cell with 1-sided value
					} else if (topLeft != null && topRight == null) {
						ins = topLeft;
					// inside cell with value
					} else {
						ins = topLeft + topRight;
					}
			}
			aCols.push(ins);
		}

		aRows.push(aCols);

		// clear column data for new row
		aCols = [];
        iC = 0;
	}

	iR = 0;
	iC = 0;

	// loop through again and replace null with prescribed empty char
	for (; iR < rows; iR++) {
		for (; iC < columns; iC++) {
			if (aRows[iR][iC] == null) {
				aRows[iR][iC] = empty;
			}
		}
		iC = 0;
	}

	// if a DOM container is passed in use it to constrct an HTML table inside
	if (DOMContainer) {
		iR = 0;
		iC = 0;

		//var container = document.getElementById(DOMContainer);

		var container = document.getElementById(DOMContainer)
			, tr
			, td
			, tdVal
			, table = _appendChild({
	            elParent: container,
	            newTag:   'table',
	            newElID:  'pascal-table',
	            attribs: [
                    { aName: 'border', aVal: '0' },
                    { aName: 'cellspacing', aVal: '1' },
                    { aName: 'cellpadding', aVal: '3' }
                ]
	        })
	    ;

		// loop through again and replace null with prescribed empty char
		for (; iR < rows; iR++) {
			tr = _appendChild({
	            elParent: table,
	            newTag:   'tr',
	            newElID:  'pascal-tr-' + iR
	        });
			for (; iC < columns; iC++) {
				if (aRows[iR][iC] == empty) {
					aRows[iR][iC] = '';
				}
				td = _appendChild({
		            elParent: tr,
		            newTag:   'td',
		            newElID:  'pascal-td-' + iC,
		            attribs: [
	                    { aName: 'align', aVal: 'center' }
	                ],
		            sText:    aRows[iR][iC]
		        });
			}
			iC = 0;
		}

	}

    /**
     * Append DOM element with its own features to parent element
     * @param       {object}        args                the arguments object
     * @property    {DOMElement}    args.elParent       the parent DOM element   
     * @property    {string}        args.newTag         the new HTML tag to be created  
     * @property    {string}        args.newElID        the new ID to be applied to the element being created  
     * @property    {array}         args.newElClasses   the list of classes to be added to the element being created 
     * @property    {array}         args.attribs        the list of attribute object for name and value to be added to the element being created
     * @property    {string}        args.sText          the text to be added to the DOM node 
     * @return      {DOMElement}                        the newly created DOM element 
     */
    function _appendChild (args) {
        var elParent       = args.elParent
            , newTag       = args.newTag
            , newElID      = args.newElID
            , newEl        = document.createElement(newTag)
            , newElClasses = args.elClasses
            , newElAttr    = args.attribs || null
            , i = 0
        ;

        newEl.id = newElID;

        if (args.sText) {
            var newContent = document.createTextNode(args.sText);
            //add the text node to the newly created div.
            newEl.appendChild(newContent);
        }
        if (newElClasses) {
            newEl.className = newElClasses;
        }

        // if attribute(s), iterate and add all
        if (newElAttr) {
            var newAttr
                , newElAttrLen = newElAttr.length
            ;

            for (; i < newElAttrLen; i++) {
                newAttr = document.createAttribute(newElAttr[i].aName);
                newAttr.value = newElAttr[i].aVal;
                newEl.setAttributeNode(newAttr); // set attribute
            }
        }

        elParent.appendChild(newEl);
        
        return newEl;
    }

}



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

    // CLICK EVENTS FOR TAB PAGES

    // FOR TRUTH TABLE PAGE
    /**
     * Click event for truth table generator
     */
    $('#generate').click(() => {
        goLove();       // para sa'yo ito hahahaha
    });

    

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

    // FOR EUCLIDEAN ALGORITHM
    /**
     * Click event for euclidean algorithm
     */
    $('#calc-euc').click(() => {
        $('#answer').val(euclidean(Number($('#value-a').val()), Number($('#value-b').val())));
    });

    $('#str-generate').click(() => {
        $('#seq-table').empty()
        let sequence = $('#str-sec').val().split('');
        sequence_builder(sequence, 0, sequence.length-1);
    });

    $('#magic-generate').click(() => {
        let table_node = $('#magic-table').empty();
        magic_square(Number($('#magic-sqrt').val()));
    });

    $('#generatepascal').click(() => {
        let [a, b] = $('#pascalinput').val().split(', ')
        pascal(Number(a), Number(b), '|', 'pascal-container');
    });
}); 