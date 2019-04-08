importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.nopromises.min.js');


onmessage = evt => {
    const [id, config, image] = evt.data;
    console.debug('Save message received.');

    Promise.all([
        localforage.setItem(`fow.${id}`, image),
        localforage.setItem(`config.${id}`, config),
    ]).then(() => {
        console.log('Saved!');
        close();
    }).catch(console.error);
}