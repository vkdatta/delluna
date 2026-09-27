export const name="text_ad_off";
export const id="dl_743cae340c074ab2fab7";
export const url=new URL("../icons/text_ad_off.svg?v=d45ce687221505032ab29ddc8fb3458a654293445e717fdb721dd42d9970d889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
