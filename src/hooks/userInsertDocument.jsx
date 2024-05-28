import { useState, useEffect, useReducer } from "react"
import { db } from '../firebase/config'
import { collection, addDoc, Timestamp } from "firebase/firestore"

const inictialState = {
    loading: null,
    error: null
}

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {loading: true, error: null}
            case "INSERT_DOC":
                return {loading: false, error: null}
            case "ERROR":
                return {loading: false, error: action.payload}
            default:
                return state
        }
}

