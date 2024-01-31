/**
 * Displays a message on the STDOUT
 * @param {String} str The message to display
 */
const displayMessage = (str) => {
    process.stdout.write(str);
}

module.exports = displayMessage
