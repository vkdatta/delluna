export const name="graphics-card";
export const id="dl_37119241be3a496fbc77";
export const url=new URL("../icons/graphics-card.svg?v=f2f8481a7ac135e0c866bb52f415244a2ea837d401da5eae74b4122921646f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
