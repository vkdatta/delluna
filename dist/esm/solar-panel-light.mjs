export const name="solar-panel-light";
export const id="dl_1109a55a9f964ab7a6bd";
export const url=new URL("../icons/S/solar-panel-light.svg?v=465e5451cbc1617259cc0b0dfffc47992641786699387b568fbdddb8544397e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
