function labelFakePhishing() {
    // Search for new emails
    let query = 'label:inbox newer_than:1d';
    let threads = GmailApp.search(query);

    let phishingHeader = 'X-Gophish'

    // Create a label. TODO only if it doesn't already exist.
    let label = GmailApp.createLabel('A TRAP');

    for (let i = 0; i < threads.length; i++) {
        let messages = threads[i].getMessages();
        for (let j = 0; j < messages.length; j++) {
            let message = messages[j];
            let rawContent = message.getRawContent();
            if (rawContent.includes(phishingHeader)) {
                GmailApp.moveThreadToArchive(threads[i]);
                label.addToThread(threads[i]);
            }
        }
    }
}