export const name="edit_road";
export const id="dl_782b02079d37cf59ede8";
export const url=new URL("../icons/edit_road.svg?v=4969390d2e2f1a225bd0b434d502891a1c203e939f74b59cb16a06328fc0e54d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
