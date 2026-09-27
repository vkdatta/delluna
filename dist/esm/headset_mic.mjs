export const name="headset_mic";
export const id="dl_b34b6e33ae88ad462510";
export const url=new URL("../icons/headset_mic.svg?v=d61e2dc6e74deae406d49dcb48620e555216679a831cd37c48dc2b1074b1cec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
