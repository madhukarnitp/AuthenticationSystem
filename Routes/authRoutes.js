const express = require("express");
const router = express.Router();
const { signupValidator, loginValidator, } = require("../validators/authValidator");
const strictBody = require("../middleware/strictBody");
const validate = require("../middleware/validate");
const protect = require("../middleware/protect");
const authController = require('..//controllers/authControllers');

//app routes 
router.post("/signup", strictBody(["fullname", "email", "password", "phone"]), signupValidator, validate,authController.signup);
router.post("/login", strictBody(["email", "password"]), loginValidator, validate, authController.login);
router.get("/verify-email/:token", authController.verifyEmail);
router.post("/resend-verification", authController.resendVerification);
router.get("/access-token", protect, authController.accessToken);
router.post("/refresh-token", authController.RefreshToken);
router.post("/forgot-password-otp", authController.forgetPassword);
router.post("/reset-password-otp", strictBody(["email", "otp", "password"]), authController.resendPassOTP);
router.post("/logout", authController.logout);

module.exports = router;
