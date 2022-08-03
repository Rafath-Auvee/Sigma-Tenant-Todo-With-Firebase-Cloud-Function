import React from "react";

const DataStructure = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 justify-items-start">
        <div class="card bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">
              1. How do you find a duplicate integer in a given array ? (Code
              required)
            </h2>
            <code>
              {`const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

                const set = new Set(numbers);

                const duplicates = numbers.filter(item => {
                    if (set.has(item)) {
                        set.delete(item);
                    } else {
                        return item;
                    }
                });

                console.log(duplicates);`}
            </code>
          </div>
        </div>
        <div class="card bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">
              2. Explain how a binary search tree is implemented. (Write in
              document)
            </h2>
            <p>
              There is root, left, right node in BST. The root node is the
              highest and left child nodes are lesser than the root node. left
              child nodes are greater. A new key in BST is always inserted into
              child node. We search for the key until go through child nodes or
              hit leaf. The left and right subtrees are in turn the binary
              search trees.{" "}
            </p>
          </div>
        </div>
        <div class="card bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">
              3. How will you check if two strings are anagrams of each other ?
            </h2>
            <p>
              const areAnagram = (str1, str2) =>
              str1.toLowerCase().split('').sort().join('') ===
              str2.toLowerCase().split('').sort().join('');
            </p>
          </div>
        </div>
        <div class="card bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">
              4. What is polymorphism and why is it required ? Provide examples
              (Write in document)
            </h2>
            <p>
              Polymorphism in JavaScript refers to the concept of reusing a
              single piece of code multiple times. By utilizing Polymorphism,
              you can define multiple forms of a method, and depending upon the
              runtime scenario, one type of object can have different behavior.

              <br />
              It describes the concept that you can access objects of different
              types through the same interface. Each type can provide its own
              independent implementation of this interface.
            </p>



            <p>
              Polymorphism takes advantage of inheritance in order to make this
              happen. In the following example child objects such as 'cricket'
              and 'tennis' have overridden the 'select' method called from
              parent object 'game' and returned a new string respectively as
              shown in the output. Whereas another child object 'football',
              instead of overriding the select method, shared(inherited) the
              method and displayed the parent string as shown in the output.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStructure;
