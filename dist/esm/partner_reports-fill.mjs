export const name="partner_reports-fill";
export const id="dl_0d2b6305995592dee48b";
export const url=new URL("../icons/partner_reports-fill.svg?v=267617fbd3e3aefb611da9da49b9f9a7f78bfee92551cac6cceb8e8427ce0769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
