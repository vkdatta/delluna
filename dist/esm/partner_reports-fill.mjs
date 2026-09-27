export const name="partner_reports-fill";
export const id="dl_b9085ed69cb6b5d3cc3a";
export const url=new URL("../icons/partner_reports-fill.svg?v=8bf00b68e0f615e870ceb78818a899c725d9ec6a45085c77f7c0b2c4a497e14c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
