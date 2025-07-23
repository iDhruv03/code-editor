import { LANGUAGE_CONFIG } from "@/app/(root)/_constants"
import { Monaco } from "@monaco-editor/react"
import {create} from "zustand"
import { CodeEditorState } from "@/types"
import * as monaco from "monaco-editor";

const getIntitialState=() =>{

    if(typeof window === "undefined"){
        return {
            language: "javascript",
            fontSize: 16,
            theme: "vs-dark",
        }
    }

    const savedLanguage = localStorage.getItem("editor-language") || "javascript";
    const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
    const savedFontSize = localStorage.getItem("editor-font-size") || 16
    return {
        language: savedLanguage,
        theme: savedTheme,
        fontSize: Number(savedFontSize),  
    }
}

export const useCodeEditorStore = create<CodeEditorState>((set,get) => {
    const initialState = getIntitialState(); 
    return {
           ...initialState,
           output: "",
           isRunning: false,
           error: null,
           editor: null,
           executionResult: null,

           getCode: () => get().editor?.getValue() || "",
            setEditor: (editor: Monaco) => {
                const savedCode = localStorage.getItem(`editor-code-${get().language}`);
                if(savedCode) editor.setValue(savedCode);

                set({editor});
                 
            },
            setTheme: (theme: string) => {
            localStorage.setItem("editor-theme", theme);
            set({ theme });
             },

    }
})