import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function NoteItem({ note, onEdit, onDelete }) {
  return (
    <View style={styles.noteItem}>
        <View style={styles.noteContentView}>
            <Text style={styles.noteContent}>{note.content}</Text>
            <Text style={styles.noteDate}>{note.createdAt}</Text>
        </View>
      <View style={styles.noteActions}>
        <TouchableOpacity onPress={() => onEdit(note)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(note.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noteItem: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  noteContentView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  noteContent: {
    fontSize: 14,
    fontWeight: "bold",
  },
  noteDate: {
    fontSize: 10,
    color: "#999"
  },
  noteActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  editButton: {
    color: "#3498db",
    marginRight: 15,
  },
  deleteButton: {
    color: "#e74c3c",
  },
});