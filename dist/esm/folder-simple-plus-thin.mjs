export const name="folder-simple-plus-thin";
export const id="dl_51db32cdc2004c4cb348";
export const url=new URL("../icons/folder-simple-plus-thin.svg?v=a1d05e54e52fecc8532a0f9d0f4f834bb5646a21fc6f50fdf768e0fc2c4e4b67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
