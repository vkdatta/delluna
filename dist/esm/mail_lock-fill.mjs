export const name="mail_lock-fill";
export const id="dl_684c7033d42146d9acc7";
export const url=new URL("../icons/mail_lock-fill.svg?v=3fdee0ab6ecbf167e6c0553718d66c3069261e624baea34dc2d631d434230dc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
