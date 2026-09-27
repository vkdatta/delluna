export const name="dot-outline-bold";
export const id="dl_430734145371400d8f9f";
export const url=new URL("../icons/dot-outline-bold.svg?v=8ea1b7bb1075d057555aceb9fd33eb78412cd537d45cbaa08bd17af3e68b971b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
