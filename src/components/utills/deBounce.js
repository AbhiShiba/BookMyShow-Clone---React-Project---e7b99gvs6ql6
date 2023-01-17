function deBounce(callBack,delay) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callBack();
        },delay)
    }
}

export default deBounce;