export const name="exposure_neg_1-fill";
export const id="dl_742678ac779259585e50";
export const url=new URL("../icons/exposure_neg_1-fill.svg?v=dd72013bd75f799b41c98ebdd61bc482a084e3ef7d8d790c7c92a86446878bfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
