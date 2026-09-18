export const name="mystery";
export const id="dl_30167d1ed6354a42bc4f";
export const url=new URL("../icons/mystery.svg?v=cc45b1e7a4cbf0b7ec3b544dbe66112f3d2d02d64708b8b8ecb70ff83f3adf64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
