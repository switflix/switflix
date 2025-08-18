
document.getElementById('openForm').onclick = () => {
  document.getElementById('popupForm').style.display = 'block';
};

document.getElementById('closeForm').onclick = () => {
  document.getElementById('popupForm').style.display = 'none';
};


document.getElementById('switoForm').onsubmit = async function(e) {
  e.preventDefault();

  let totalScore = 0;

  const formData = new FormData(this);

//  formData.append('SecretKey', 'switflixSecret2025');

  for (let pair of formData.entries()) {
    if (pair[0].startsWith("clarity") || pair[0].startsWith("visibility") || pair[0].startsWith("growth")) {
      totalScore += parseInt(pair[1], 10);
    }
  }

  let feedback = "";

  if (totalScore <= 15) {
    feedback = "⚠️ You need a SwitO₂ reboot";
  } else if (totalScore <= 30) {
    feedback = "🛠 Not bad but you're not unforgettable";
  } else if (totalScore <= 45) {
    feedback = "💡 You're on the right track";
  } else {
    feedback = "🔥 You're already a customer magnet. Let's optimize what works.";
  }

  formData.append('totalScore', totalScore);
  formData.append('feedback', feedback);
  
    console.log(JSON.stringify(
       Object.fromEntries(formData), null, 2
    ));

  try {
    await fetch('https://script.google.com/macros/s/AKfycbxrwfG0jWjFEQoa_H6PyJqKnRIbzU3HTeUTeMZXVbsfEZdlTXOWv_z7IB918QYHESpW/exec', {
      method: 'POST',
      body: formData,
    });

    alert("💡 Submitted! Check your Google Sheet + email.");
  } catch (err) {
    console.error("⚠️ Error submitting form:", err);
    alert("Something went wrong! Check the console for details.");
  }

  const name = formData.get("name") || "Aduni";
  const email = formData.get("email") || "";
  const phone = formData.get("phone") || "";
  const industry = formData.get("industry") || "";
  const resultText = `

SwitOÂ² Assessment Result

Name: ${name}
Phone: ${phone}
Email: ${email}
Industry: ${industry}

Score: ${totalScore}/60
Feedback: ${feedback}

Thanks for taking the SwitO² Assessment.
  `;
  document.getElementById('result').innerHTML = `
  <p font-weight: lighter; >Hi! ${name},</p><br>
    <h3 font-weight: 100; >Your SwitO₂ Score is: ${totalScore}/60</h3>
    <h3> Here is your feedback:</h3>
    <p> ${feedback}</p>
    <br>
    <p> Want a branded SwitO₂ score card?</p>
    <br>
    <br>
    <p>Send "ASSESS ME" to SWITFLIX <a href='https://wa.me/+2348088436371' target="_blank" rel="noopener">whatsapp</a> or <a href='mailto:switflixx@email.com' target="_blank" rel="noopener">email</a> address.

    <br>
    <br>
    Now that you’ve unlocked the key insights into your <br>
    brand’s video marketing growth potential.<br>
    <br>
    You'er ready to turn these insights into action and<br>
    attract more customers?<br>
    <br>
    <a href='https://calendly.com/switflix/30min' target="_blank" rel="noopener">👉 Book your free SwitO² Strategy Session now</a>
    <br>
    <br>
    During this session, we’ll:
    <br>
    <br>
    - Review your assessment results
    <br>
    - Identify quick-win growth opportunities
    <br>
    - Build a clear action plan tailored to your brand<br>
    <br>
    Let’s make your video marketing irresistible.</p>
  `;
};
