export const name="html";
export const id="dl_532952e79cc87a4b5c8d";
export const url=new URL("../icons/html.svg?v=20ae99cedd81cbe5f497cd6edae51bf39daf97774376995817b71c197cd37c2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
