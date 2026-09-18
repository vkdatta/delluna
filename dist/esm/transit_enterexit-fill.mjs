export const name="transit_enterexit-fill";
export const id="dl_d47c45e571444b6696a2";
export const url=new URL("../icons/T/transit_enterexit-fill.svg?v=fec257899348b05e17a0bffabbe7218814464e0eb800a4f0e6a462e59fb18ea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
