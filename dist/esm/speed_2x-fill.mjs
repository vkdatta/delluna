export const name="speed_2x-fill";
export const id="dl_c9a753d9dd439f68b932";
export const url=new URL("../icons/speed_2x-fill.svg?v=8fa5a9e4b36cfacecf0d8ef82b981fb910bdcae980758605d37d565286bee168",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
