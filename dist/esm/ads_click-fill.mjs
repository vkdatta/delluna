export const name="ads_click-fill";
export const id="dl_b4f546cbbe34638da248";
export const url=new URL("../icons/ads_click-fill.svg?v=57656b636f0430ad1a57710bd941c7e06f1557db74b4b954097e4205db03a62e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
