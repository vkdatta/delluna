export const name="lightning_stand-fill";
export const id="dl_cdf3bddce5397fb2c19b";
export const url=new URL("../icons/lightning_stand-fill.svg?v=74b7cd677e09c90b1ada2a34d019197af1227e6a716853afeca54fa59058e901",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
