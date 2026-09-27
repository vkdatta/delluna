export const name="lte_plus_mobiledata_badge-fill";
export const id="dl_d4f137d03321ae68b132";
export const url=new URL("../icons/lte_plus_mobiledata_badge-fill.svg?v=414bd92267e381e62fb5f77ef21f265040574b1a2bc16f986e2821d163eedc0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
