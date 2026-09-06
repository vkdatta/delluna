export const name="hand-heart-fill";
export const id="dl_1d57033205214a3896d1";
export const url=new URL("../icons/hand-heart-fill.svg?v=c73d3fb3de8c7b33aea548e92b491fe24fb8fab1f973f1a88aed6ac0b24349c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
