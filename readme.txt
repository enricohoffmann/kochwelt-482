Einbinden des Headers und Footers auf den Seiten.

In der "script.js" gibt es eine loadHeader und eine loadFooter Funktion.
In allen Seiten sollte es einen <header></header> und einen <footer></footer> geben.
Es wird beim Aufruf der Funktion ein Wert übergeben, der besagt, ob es die Hauptseite ist oder nicht.
von der Startseite, index.html, wird die Funktion init(true) aufgerufen, um den Header und den Footer anzuzeigen.
Auf den anderen Seiten kann im js-Teil die loadHeader(false) und die loadFooter(false) aufgerufen werden.

