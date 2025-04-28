async function getStudyTopic() {
    return new Promise((resolve) => {
      chrome.storage.local.get(['studyTopic'], function (result) {
        resolve(result.studyTopic);
      });
    });
  }
  
  async function runGroqAgent(title, description, topic) {
    const prompt = `User is studying: "${topic}". Does this video titled "${title}" with description "${description}" match the topic? Reply with "YES" or "NO".`;
  
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 50
      })
    });
  
    const data = await response.json();
    return data.choices[0].message.content.trim();
  }
  
  (async () => {
    const topic = await getStudyTopic();
    if (!topic) return;
  
    const title = document.title;
    const descriptionEl = document.querySelector('#description') || document.querySelector('meta[name="description"]');
    const description = descriptionEl ? descriptionEl.innerText || descriptionEl.content : '';
  
    const verdict = await runGroqAgent(title, description, topic);
    if (verdict.toLowerCase().includes('no')) {
      document.body.innerHTML = '<h1 style="color:red;text-align:center;margin-top:20%;">BLOCKED: Not related to your study topic</h1>';
    }
  })();
  