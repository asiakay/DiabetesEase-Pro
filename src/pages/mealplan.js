import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react'

function MealPlanPage(){
    // 
    return (
        <>
  
      <main className={styles.main}>
        <div className={styles.center}>
            <h1 className={styles.h1}>User Requirements Form</h1>
            <p>Please fill out the following information to personalize your DiabetesEase Pro experience.</p>
           
            <form action="submit.php" method="POST">
                {/* Personal Information */}
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required /><br /><br />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required /><br /><br />

                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br /><br />

                {/* Dietary Preferences */}
                <label htmlFor="dietary-preferences">Dietary Preferences:</label><br />
                <input type="checkbox" id="vegetarian" name="dietary-preferences[]" value="vegetarian" />
                <label htmlFor="vegetarian">Vegetarian</label><br />

                <input type="checkbox" id="vegan" name="dietary-preferences[]" value="vegan" />
                <label htmlFor="vegan">Vegan</label><br />

                <input type="checkbox" id="gluten-free" name="dietary-preferences[]" value="gluten-free" />
                <label htmlFor="gluten-free">Gluten-Free</label><br /><br />

                {/* Dietary Restrictions */}
                <label htmlFor="dietary-restrictions">Dietary Restrictions (if any):</label><br />
                <input type="checkbox" id="diabetic" name="dietary-restrictions[]" value="diabetic" />
                <label htmlFor="diabetic">Diabetic</label><br />

                <input type="checkbox" id="allergies" name="dietary-restrictions[]" value="allergies" />
                <label htmlFor="allergies">Food Allergies</label><br />

                <input type="checkbox" id="other-restrictions" name="dietary-restrictions[]" value="other-restrictions" />
                <label htmlFor="other-restrictions">Other (please specify):</label>
                <input type="text" id="other-restrictions-text" name="other-restrictions-text" /><br /><br />

                {/* Fitness Goals */}
                <label htmlFor="fitness-goals">Fitness Goals:</label><br />
                <input type="checkbox" id="weight-loss" name="fitness-goals[]" value="weight-loss" />
                <label htmlFor="weight-loss">Weight Loss</label><br />

                <input type="checkbox" id="muscle-gain" name="fitness-goals[]" value="muscle-gain" />
                <label htmlFor="muscle-gain">Muscle Gain</label><br />

                <input type="checkbox" id="general-fitness" name="fitness-goals[]" value="general-fitness" />
                <label htmlFor="general-fitness">General Fitness</label><br /><br />

                {/* Target Blood Sugar Levels */}
                <label htmlFor="target-blood-sugar">Target Blood Sugar Levels (mg/dL):</label><br />
                <input type="number" id="target-blood-sugar" name="target-blood-sugar" required /><br /><br />

                {/* Submit Button */}
                <input type="submit" value="Submit" />
            </form>
        </div>
        </main>
        </>)
}

export default MealPlanPage;