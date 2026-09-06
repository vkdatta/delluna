export const name="folder-simple-dashed-fill";
export const id="dl_807f8d8488a449329246";
export const url=new URL("../icons/folder-simple-dashed-fill.svg?v=110bcd3d75999cf9b7489f2658582430bfddad0ca86c82cd4cc6a7d1cb03e5c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
