export const name="counter_1-fill";
export const id="dl_96050015a914e13ac06b";
export const url=new URL("../icons/counter_1-fill.svg?v=4ac167b6dd69abfbbe5846e391157f3fe3a78e4870495a647eae2ef6cd8a22ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
