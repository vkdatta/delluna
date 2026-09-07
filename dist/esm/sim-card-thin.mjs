export const name="sim-card-thin";
export const id="dl_06e857a051e340579c0c";
export const url=new URL("../icons/S/sim-card-thin.svg?v=e9879ac0fab9f330c83cddff4178483a376fd66ee8f17dfc4d824d432dc8f41a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
