import { useState } from 'react';

// const RecipeAuthor = () => {
//    let authorLink = "";
//    let authorPhoto = "";
//    let authorName = "";

//    return (
//       <div>
//          <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
//          <div>
//             <h3>{authorName}</h3>
//             <a href={authorLink}></a> 
//          </div>
//       </div>
//    );
// }

// const RecipeIngredients = () => {
//    const ingredients = [];
//    return(
//       <div>
//          <h3>Recipe Ingredients</h3>
//          <ul>
//             <li>{ingredients[0]}</li>
//             <li>{ingredients[1]}</li>
//             <li>{ingredients[2]}</li>
//             <li>{ingredients[3]}</li>
//             <li>{ingredients[4]}</li>
//          </ul>
//       </div>
//    );
// }

// const RecipeDescription = () => {
//    return (
//       <div> 
//          <div>
//             <h1></h1>
//             <p></p>
//          </div>
//          <div className="recipePhotoBlock">
//             <RecipeIngredients />
//             <RecipeAuthor />
//          </div>
//       </div>
//    );
// }

// const RecipePhoto = () => {
//    return (
//       <img src="" alt="" className="imageUpdates"/>
//    );
// }

// export default function RecipeDisplay () {
//    return(
//       <div className="recipePhotoBlock">
//          <RecipePhoto />
//          <div>
//             <RecipeDescription />
//          </div>
//       </div>
//    );
// }

import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.simplyrecipes.com/";
   let authorPhoto = "https://www.simplyrecipes.com/wp-content/uploads/2007/06/elise-bauer.jpg";
   let authorName = "Elise Bauer";

   return (
      <div>
         <img src={authorPhoto} alt = {authorName} style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Visit Website</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {

   const ingredients = [
      "Limes",
      "White sugar",
      "Cold water",
      "Sweetened condensed milk",
      "Ice cubes"
   ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
             <li>{ingredients[1]}</li>
             <li>{ingredients[2]}</li>
             <li>{ingredients[3]}</li>
             <li>{ingredients[4]}</li>
          </ul>
      </div>
   );
}



const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Brazilian Lemonade</h1>
            <p>A refreshing and creamy citrus drink with a unique twist, perfect for hot summer days.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.simplyrecipes.com/wp-content/uploads/2007/06/brazilian-lemonade-horiz-a-1600.jpg" alt="Brazilian Lemonade" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
