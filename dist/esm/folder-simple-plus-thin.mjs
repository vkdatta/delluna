export const name="folder-simple-plus-thin";
export const id="dl_51db32cdc2004c4cb348";
export const url=new URL("../icons/folder-simple-plus-thin.svg?v=a19fbd35153821fc6b34549e65683f62d68577721175fd24c4f7c572cbdd832b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
