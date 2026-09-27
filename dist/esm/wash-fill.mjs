export const name="wash-fill";
export const id="dl_ba445d657d4980dbc9e0";
export const url=new URL("../icons/wash-fill.svg?v=72b373a6437fa885a9d0c766b1f73697bf8c1a63be4182b04ae204da06e5a321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
