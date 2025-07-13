import express from "express";
const router = express.Router();

router.post("/order", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400).json({
        success: false,
        message: "please provide text to search",
        data: [],
      });
      return;
    }

    const { itemListFromGroq, okStatusGroq } = await GroqService(text);

    if (!okStatusGroq) {
      res.status(500).json({
        success: false,
        message: "Couldn't connect to our servers please try again later",
        data: [],
      });
      return;
    }

    if (itemListFromGroq.length === 0) {
      res.status(404).json({
        success: false,
        message: "Couldn't find products",
        data: [],
      });
      return;
    }

    const { itemListFromStore, okStatusStore } = await StoreService(
      itemListFromGroq
    );

    if (!okStatusStore) {
      res.status(500).json({
        success: false,
        message: "Couldn't connect to api services please try again later",
        data: [],
      });
      return;
    }

    if (itemListFromStore.length === 0) {
      res.status(404).json({
        success: false,
        message: "Couldn't find products",
        data: [],
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Successfully found products",
      data: itemListFromStore,
    });

    return;
  } catch (error) {
    res.status(500).json({
        success:false,
        message:`Server error : ${error}`,
        data:[]
    })
    return;
  }
});

export default router;
