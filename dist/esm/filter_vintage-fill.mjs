export const name="filter_vintage-fill";
export const id="dl_81d89aa3aa27491cba1a";
export const url=new URL("../icons/filter_vintage-fill.svg?v=82c79dc695fc3c8d632c0fe2b2441221f1a20f2143025fbd94372c556aec9716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
