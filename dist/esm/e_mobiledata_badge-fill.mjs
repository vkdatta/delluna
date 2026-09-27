export const name="e_mobiledata_badge-fill";
export const id="dl_1ced29119de619bd1bfd";
export const url=new URL("../icons/e_mobiledata_badge-fill.svg?v=58f8515d6ccce84d2f01ab8629bdd9123f0d1c682301f40236f415518773188d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
