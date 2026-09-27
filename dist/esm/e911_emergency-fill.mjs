export const name="e911_emergency-fill";
export const id="dl_b43bcd5c2a8347c61d4c";
export const url=new URL("../icons/e911_emergency-fill.svg?v=0cc916eec9d9e54e6967a1987ac02fa1cae522d66041b4c464bc7474fec14bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
