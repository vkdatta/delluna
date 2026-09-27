export const name="total_dissolved_solids";
export const id="dl_c3dca6bb62d60161dc93";
export const url=new URL("../icons/total_dissolved_solids.svg?v=8011274a4427cabbc91df4405e543c842c28d6768019466b5f16d738a111c135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
