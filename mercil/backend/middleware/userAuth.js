import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

const authUser = async (req, res, next) => {
  try {
    // ดึง token จาก header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // หา user จาก id ที่อยู่ใน token
    const user = await userModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    req.user = user; // เก็บ user เข้า req
    next();

  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default authUser;
