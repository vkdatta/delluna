export const name="cyclone-fill";
export const id="dl_142c9475437ae9dbd242";
export const url=new URL("../icons/cyclone-fill.svg?v=3b6ae08230cc948d3ac35a040db9388a94cdd4f5a55fe583ac3d8269eab7f169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
