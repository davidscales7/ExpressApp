// Assuming you're using Express.js
app.get('/finances/:userId', async (req, res) => {
  try {
      const userId = req.params.userId;
      const user = await User.findById(userId).populate('finances');
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.json(user.finances);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
});
