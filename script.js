function shakeMagic8Ball() {

const question = prompt("Ask the Pyramid of Knowledge your question. Don't waist It's time.");

if (question === null) {
    document.getElementById ('response-text').innerText = 'Ask Me the question.'
    document.getElementById ('response-text').classList = 'Display-4 text-warning'
    document.getElementById ('response-image').src = '#BAD/BROKEN IMAGE'
}

if (!question.trim()) {
    alert('You better not be waisting My time.')
    return
}



}