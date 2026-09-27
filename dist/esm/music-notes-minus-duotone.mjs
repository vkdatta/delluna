export const name="music-notes-minus-duotone";
export const id="dl_72f9094f8e8c4a0a8679";
export const url=new URL("../icons/music-notes-minus-duotone.svg?v=ae6ee98e2a380fe119e125aba0192e00cb16dee94f8d315c3e8b655d8ecac9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
