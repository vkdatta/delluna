export const name="globe-x-light";
export const id="dl_64645d86730843e4afd7";
export const url=new URL("../icons/globe-x-light.svg?v=5a302dc2096dad22ef23e4ef1a99aafd80cc35df740958b2d3bf06c9d7db0707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
