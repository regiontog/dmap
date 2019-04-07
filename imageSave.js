importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.nopromises.min.js');


onmessage = evt => {
    const [id, image] = evt.data;
    console.debug('Save message received.');

    localforage.setItem(`fow.${id}`, image).then(() => {
        console.log('Saved!');
        close();
    }).catch(console.error);
}