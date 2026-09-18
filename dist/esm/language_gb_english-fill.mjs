export const name="language_gb_english-fill";
export const id="dl_0eb75aa28d014364a862";
export const url=new URL("../icons/language_gb_english-fill.svg?v=1e2f0f6cd9eda3b36c336c111a3c2bc22bf38df441d59b792459a5ba874c2a21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
