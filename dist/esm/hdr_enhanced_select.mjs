export const name="hdr_enhanced_select";
export const id="dl_6a33472f23f5535adda0";
export const url=new URL("../icons/hdr_enhanced_select.svg?v=6fc967a5e5fcc7072acb6918811d873db3f15d8fa8c0b687422bdc49dec8ad76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
