export const name="face_3";
export const id="dl_1061b57f040e5c0764cf";
export const url=new URL("../icons/face_3.svg?v=5653f75569aa20c2213c9a1d5ceb7a6a9e8765d9a1651696eb87068d41b10ae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
