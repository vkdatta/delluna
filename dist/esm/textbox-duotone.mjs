export const name="textbox-duotone";
export const id="dl_5bac46fd254ef7acb725";
export const url=new URL("../icons/textbox-duotone.svg?v=dcdb4cd42b01e384c7735b436058e97d0e99907c9d7a3d9d4aab7976e463a933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
