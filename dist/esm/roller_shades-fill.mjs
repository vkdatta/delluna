export const name="roller_shades-fill";
export const id="dl_47b4f0f2ba90e15bb9c7";
export const url=new URL("../icons/roller_shades-fill.svg?v=f0d6df711fb9ce54edce06a8af6d972ae296e59987959ea1c0ab7ba2ab72a6a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
