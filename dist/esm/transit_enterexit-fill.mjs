export const name="transit_enterexit-fill";
export const id="dl_e1406a986dbd06c00e31";
export const url=new URL("../icons/transit_enterexit-fill.svg?v=fa496854a3b308d1dd69f5928b85680a1c2da8ca335ee70cd68fc0d67ef7d5d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
