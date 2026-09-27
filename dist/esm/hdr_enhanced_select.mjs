export const name="hdr_enhanced_select";
export const id="dl_8d35170ad5d5637097dd";
export const url=new URL("../icons/hdr_enhanced_select.svg?v=744b964ea0ab887706ca57aa88580c2a277e6c744832bb827c733e95ce5657d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
