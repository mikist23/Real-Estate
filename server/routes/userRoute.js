import express from "express";
import { createUser, bookVisit, getAllBookings, cancelBooking} from "../controllers/userCntrl.js";


const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
//router.post("/toFav/:rid", jwtCheck, toFav);
//router.post("/allFav/", jwtCheck, getAllFavorites);
export { router as userRoute };