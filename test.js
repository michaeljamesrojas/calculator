function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    
    this.info = function (){
        return title + " by " + author + ',' + pages + 'pages' + ',' + (isRead)? 'done reading':'not read';
    }
}

let k = new Book('Learn enough', 'Michael James ROjas', 234, true);
alert(k.info);