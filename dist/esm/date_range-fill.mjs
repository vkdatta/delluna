export const name="date_range-fill";
export const id="dl_638fe43b462249fd99fa";
export const url=new URL("../icons/date_range-fill.svg?v=824fb59fc611fd74742f6b9a66e585edf70d8916a4d711bd8c5fa0be0d264ddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
