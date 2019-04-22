importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.nopromises.min.js');


onmessage = evt => {
    const [id, config, image] = evt.data;
    console.debug('Save message received.');

    const promise = Promise.all([
        localforage.setItem(`fow.${id}`, image),
        localforage.setItem(`config.${id}`, config),
    ]).then(() => {
        console.log('Saved!');
    }).catch(err => {
        console.error("Error during saving to localforage");
        console.error(err);
    }).finally(() => close());

    console.log(evt);
    console.log(promise);

    setTimeout(() => {
        console.log("Eh?");
    }, 5000);
}

onerror = err => {
    console.error("WebWorker error");
    console.error(err);
}

onclose = () => {
    console.log("Closing WebWorker");
}