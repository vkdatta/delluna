export const name="percent_discount";
export const id="dl_06c88d422647f50d70a6";
export const url=new URL("../icons/percent_discount.svg?v=e01ddcdc2d5dca583ad9179ded1650511ca7bdf32069c79c65c59dd35af7e097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
