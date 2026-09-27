export const name="computer-tower-thin";
export const id="dl_e95945d90df44341ba1d";
export const url=new URL("../icons/computer-tower-thin.svg?v=a169fa6b8814fb96da3b033802d32a0c3da64aced1a322c16e333a9ef2a6e27c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
