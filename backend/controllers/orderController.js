const Order = require("../models/Order");

const placeOrder = async (req, res) => {
  const { email, productId, productName, productPrice, quantity = 1, shippingMethod } = req.body;

  // Validate required fields
  if (!email || !productId || !productName || !productPrice) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Create a new order object
    const newOrder = new Order({
      email,
      productId,
      productName,
      productPrice,
      quantity,
      shippingMethod,
    });

    // Save the order to the database
    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);

    // Handle specific MongoDB errors
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: "Validation error", details: error.errors });
    }

    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { placeOrder };