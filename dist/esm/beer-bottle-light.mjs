export const name="beer-bottle-light";
export const id="dl_8f8ca07de2ff477897cd";
export const url=new URL("../icons/beer-bottle-light.svg?v=6509ae98b311ba667bec9b8cf543dd3a94290e6445932617a5be004603499c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
