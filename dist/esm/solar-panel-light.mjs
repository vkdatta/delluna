export const name="solar-panel-light";
export const id="dl_23b4e8ff60597bd64b4b";
export const url=new URL("../icons/solar-panel-light.svg?v=465e5451cbc1617259cc0b0dfffc47992641786699387b568fbdddb8544397e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
