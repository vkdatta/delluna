export const name="contactless_off-fill";
export const id="dl_ac78527b67264fa6a4d7";
export const url=new URL("../icons/contactless_off-fill.svg?v=ddd340f190e8d2d202579afeb3571ee157e87576bdad002bac5dcb0d1dabea83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
