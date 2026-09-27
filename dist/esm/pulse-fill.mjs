export const name="pulse-fill";
export const id="dl_ab6a8f675024456a977a";
export const url=new URL("../icons/pulse-fill.svg?v=9578534421e6207f2948a234fafa25c080a31f6a3e79afe513fa62241f088fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
