export const name="mobile_info-fill";
export const id="dl_09002b6033728367f5be";
export const url=new URL("../icons/mobile_info-fill.svg?v=bddab3b3440cd488df5066f64924aac3e0f4040acc52fc10c6474496d90eddcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
