export const name="crop_square";
export const id="dl_d4ac622e3ca24d7196f9";
export const url=new URL("../icons/C/crop_square.svg?v=311078c839d4e9064e0500936ff77cd05c28c3c736a06cbf2a667e63bee085f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
