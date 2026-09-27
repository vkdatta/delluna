export const name="face_right";
export const id="dl_afde5d74dcd5c5b25b00";
export const url=new URL("../icons/face_right.svg?v=fcd363c4f4049200001182ddc128f5f3aff5aed545c38d62cc0b39fece931945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
