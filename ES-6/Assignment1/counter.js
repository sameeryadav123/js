
    let heading = document.getElementById('count');

    class Counter {
        constructor() {
            this.value = 0;
            this.inter = "";
            this.count = false;
        }

        startStop() {
            if (this.count) {
                clearInterval(this.inter);
                document.getElementById('startStop').textContent = "Start";
            } else {
                this.inter = setInterval(() => {
                    this.increment();
                }, 1000);
                document.getElementById('startStop').textContent = "Stop";
            }
            this.count = !this.count;
        }

        increment() {
            this.value++;
            document.getElementById('count').textContent = this.value;
            
        }

        decrement() {
            this.value--;
            document.getElementById('count').textContent = this.value;
           
        }
    }

    let start = new Counter();

    