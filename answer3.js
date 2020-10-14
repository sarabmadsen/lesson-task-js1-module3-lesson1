async function getCatFacts() {
    const url = "https://cat-fact.herokuapp.com/facts";
    try {
        const response = await fetch(url);
        const results = await response.json();
        const facts = results.all;
        console.log(facts.length);
    } catch (err) {
        console.log(err);
    }
}

getCatFacts();
