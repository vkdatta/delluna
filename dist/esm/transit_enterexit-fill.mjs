export const name="transit_enterexit-fill";
export const id="dl_6e9f1ca377d2773867a6";
export const url=new URL("../icons/transit_enterexit-fill.svg?v=439b21b2188da65c1941503ac286b118f772d9ff840b212c64bc44327ac38328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
