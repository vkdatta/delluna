export const name="sim_card";
export const id="dl_4c3043de27dd09392529";
export const url=new URL("../icons/sim_card.svg?v=07aa5eebd7158407c84b1427fd8950ef65ef9e9353ca309d8689fd99f96a4623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
