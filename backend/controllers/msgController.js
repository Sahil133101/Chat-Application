import { conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export  const sendMessage =  async (req,res) => { 
    try {
const senderId =  req.id;
const receiverId = req.params.id;
const {message} =  req.body;
let gotConservations =  await conversation.findOne({
    participants: {$all: [senderId, receiverId]},
});

if(!gotConservations){
    gotConservations = await conversation.create({
        participants: [senderId, receiverId],
    });
}
  const newMessage = await Message.create({ 
    senderId,
    receiverId,
    message,
   });

   if(newMessage){
    gotConservations.messages.push(newMessage._id);
   }
   await gotConservations.save();
   return res.status(201).json({
    message: "Message send successfully"
   })

   //socket io
}
    catch(error){
        console.log(error);
    }
}

export const getMessage = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
        const gotConversation = await conversation.findOne({ // Renamed variable
            participants: { $all: [senderId, receiverId] }
        }).populate("messages")
        return res.status(200).json(gotConversation?.messages);

    } catch (error) {
        console.log(error);
    }
};
