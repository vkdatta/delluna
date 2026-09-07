export const name="graphics-card";
export const id="dl_37119241be3a496fbc77";
export const url=new URL("../icons/graphics-card.svg?v=8309f5f52ec05287ab19f46e0e6562f6a589d87836d08f74377b0c929474f1ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
