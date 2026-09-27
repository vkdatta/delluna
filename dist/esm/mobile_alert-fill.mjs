export const name="mobile_alert-fill";
export const id="dl_2d653b635c15e040cf08";
export const url=new URL("../icons/mobile_alert-fill.svg?v=f8c610f178850e6b6b6600dd9b21945c0aa838eb39191abf58c5f340fd9489b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
