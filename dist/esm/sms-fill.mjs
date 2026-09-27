export const name="sms-fill";
export const id="dl_fabebe4004bee22c5858";
export const url=new URL("../icons/sms-fill.svg?v=ebfc8c706e79147f8597f9417277266a601ed340a472d5c9b53a4e4ac7f7766d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
