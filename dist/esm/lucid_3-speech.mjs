export const name="lucid_3-speech";
export const id="dl_51afc2728d3a482088c1";
export const url=new URL("../icons/lucid_3-speech.svg?v=9c2b6e9dbe032af8a9b84aba9c6202c553bb5ec78101083e0904d0b24cfe0a27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
