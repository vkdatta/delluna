export const name="hand-deposit-duotone";
export const id="dl_cab46e0433104479b211";
export const url=new URL("../icons/hand-deposit-duotone.svg?v=0c06100870dc993f19dc57805c6341ccb40d57a1c2c05fb6979de8ac454482be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
