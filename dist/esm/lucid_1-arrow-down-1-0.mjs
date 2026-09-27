export const name="lucid_1-arrow-down-1-0";
export const id="dl_c6bd5e17ed764e6687a9";
export const url=new URL("../icons/lucid_1-arrow-down-1-0.svg?v=705e4b13f06d6961bcaa29763f866f2a0be2ad4d7f6742408a96d924737e9b53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
