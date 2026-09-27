export const name="hdr_enhanced_select-fill";
export const id="dl_ce8134e220454b00881a";
export const url=new URL("../icons/hdr_enhanced_select-fill.svg?v=23590f5fc7e5cb6666c0b4f843ac330bfa359ec7d37d5734467900474fcca985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
