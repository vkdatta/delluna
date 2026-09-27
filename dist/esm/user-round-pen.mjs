export const name="user-round-pen";
export const id="dl_0a06e53d562046e191ec";
export const url=new URL("../icons/user-round-pen.svg?v=62e04b38e9e6b61d33803acf215be9f762d5fffcdbaf5ce46b4be21a7b3d20ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
