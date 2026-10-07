function outerFunction() {
    let name = "Gyan";
    function innerFunction() {
        console.log("Hello, " + name);
    }
    innerFunction();
}

outerFunction();