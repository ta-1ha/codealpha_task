   const display = document.getElementById('display');

   function appendValue(value) {
       display.value += value;
   }

   function clearDisplay() {
       display.value = '';
   }

   function calculateResult() {
       try {
           display.value = eval(display.value);
       } catch {
           display.value = 'Error';
       }
   }

   function calculateTrig(func) {
       try {
           const value = parseFloat(display.value);
           let result;
           switch (func) {
               case 'sin':
                   result = Math.sin(value).toFixed(4);
                   break;
               case 'cos':
                   result = Math.cos(value).toFixed(4);
                   break;
               case 'tan':
                   result = Math.tan(value).toFixed(4);
                   break;
               case 'cot':
                   result = (1 / Math.tan(value)).toFixed(4);
                   break;
           }
           display.value = result;
       } catch {
           display.value = 'Error';
       }
   }
