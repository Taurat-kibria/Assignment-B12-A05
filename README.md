1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   <br>
   Ans: When we use getElementById we get a node of that ID in return but if we use getElementsByClassName we get a nodelist of the elements with that particular class name.
        If we use querySelector, it retuns a single node which it finds first. If we use querySelectorAll we find a node list with elements with that specific attribute.
   
2. How do you create and insert a new element into the DOM?
   <br>
   Ans: Steps:<br>
         Create a new element with document.createEliment()<br>
         Input it's innerText or innerHTML<br>
         Get access to parent node in which I want to insert the element.<br>
         Now in the parent node just insert with appendChild()<br>

3. What is Event Bubbling and how does it work?<br>
   Ans: When an event occurs on an element it propagates through upwards to it parent and this process continues until it reaches the root of the program.

4. What is Event Delegation in JavaScript? Why is it useful?<br>
   Ans: It is an way of handeling event where a single event listener is attached to parent element to control the event triggered by it's child elements.

5. What is the difference between preventDefault() and stopPropagation() methods?<br>
   Ans: preventDefault() stops default action eg. forms reloading and stopPropagation() stops the event bubling.
   

   
