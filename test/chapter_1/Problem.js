console.log(50)

let data_store = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

setInterval(() => {
    data_store = data_store.map((item) => Math.floor(Math.random() * 100))
    console.log(data_store)

    // Log memory usage
    const memoryUsage = process.memoryUsage();
    console.log(`Memory Usage: RSS = ${memoryUsage.rss}, Heap Total = ${memoryUsage.heapTotal}, Heap Used = ${memoryUsage.heapUsed}, External = ${memoryUsage.external}`);
}, 1000)


