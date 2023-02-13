

/**
 * function: boxImageType(img_node)
 * Determines what image should be displayed
 */
function boxImageType(type) {
    let img = $('<img>');

    if (type === topic_type[0])
        img.attr({src: topic_imgs[0], alt: type});
    else if (type === topic_type[1])
        img.attr({src: topic_imgs[1], alt: type});
    else
        img.attr({src: topic_imgs[2], alt: type});
    return img;
}

/**
 * function: createBoxLinkNode
 * Creates a link to container the box
 */
function createBoxLinkNode(link) {
    return $('<a></a>').attr('href', link);;
}

/**
 * function: createBoxContentNode(heading_text, paragraph_text)
 * Creates a heading and paragraph for a box
 */
function createBoxContentNode(heading_text, paragraph_text) {
    let heading_node = $('<h2></h2>').text(heading_text);
    let paragraph_node = $('<p></p>').text(paragraph_text);
    return $('<div></div>', {class : 'box-desc-content'}).append(heading_node).append(paragraph_node);
}

/**
 * function createBoxType(type)
 * Creates a type for a box
 */
function createBoxTypeNode(type) {
    let topic_type = $('<div></div>', {class: 'box-type', text: type})
    return $('<div></div>', {class : 'box-type-content'}).append(topic_type);
}

