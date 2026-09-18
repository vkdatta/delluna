export const name="sim_card";
export const id="dl_0f5e74d3ac1d4edf8d85";
export const url=new URL("../icons/S/sim_card.svg?v=07aa5eebd7158407c84b1427fd8950ef65ef9e9353ca309d8689fd99f96a4623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
