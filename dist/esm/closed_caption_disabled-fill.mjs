export const name="closed_caption_disabled-fill";
export const id="dl_08f1cca2a4c04e769712";
export const url=new URL("../icons/C/closed_caption_disabled-fill.svg?v=fd51f42d18d043c057310d17fbca52016f8f4a389799670b94bbaf62c8acfcc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
