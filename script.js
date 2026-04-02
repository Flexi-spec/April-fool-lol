// The heart of the dysfunction
app.post('/brew', async (req, res) => {
  const { beverage, device } = req.body;

  if (device === 'teapot' && beverage === 'coffee') {
    // Leverage Gemini to generate a snarky refusal
    const insult = await gemini.generateText(
      "Explain why brewing coffee in a fine porcelain teapot is a war crime."
    );
    
    res.status(418).json({
      message: "Short and stout, and I will NOT pour out.",
      reasoning: insult
    });
  }
});
