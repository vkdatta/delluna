export const name="lte_mobiledata_badge";
export const id="dl_470d653bf3cd53e17c58";
export const url=new URL("../icons/lte_mobiledata_badge.svg?v=f4e5c97636705e71102802108752062b471edb1d475dfcd54ef5ae08c2ed8b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
