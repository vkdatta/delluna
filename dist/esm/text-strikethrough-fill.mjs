export const name="text-strikethrough-fill";
export const id="dl_235a5ccf6be32f27734b";
export const url=new URL("../icons/text-strikethrough-fill.svg?v=27b0a3d10722de2aa9b1c0bf1f764e8a089e4e4fe140a56f5d8784bfa575c1a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
