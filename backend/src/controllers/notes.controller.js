import noteModel from "../models/notes.models.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.find().sort({createdAt: -1});
    res.status(200).json({
      message: "Notes fetched successfully !",
      notes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error !",
    });
  }
};

export const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new noteModel({
      title: title,
      content: content,
    });
    await newNote.save();
    res.status(201).json({
      message: "Note created successfully !",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error !",
    });
  }
};

export const updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await noteModel.findByIdAndUpdate(req.params.id, {
      title: title,
      content: content,
    });
    if (!updatedNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }
    res.status(200).json({
      message: "Note updated successfully !",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error !",
    });
  }
};

export const deleteNotes = async (req, res) => {
  try {
    const deletedNote = await noteModel.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }
    res.status(200).json({
      message: "Note deleted successfully !",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error !",
    });
  }
};

export const getNotesById = async (req, res) =>{
  const note = await noteModel.findById(req.params.id)

  if(!note){
    res.status(404).json({
      message: "Note not found !"
    })
  }
  res.status(200).json({
    message: "Note fetched successfully !",
    note
  })
}