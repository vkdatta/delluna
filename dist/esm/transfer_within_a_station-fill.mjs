export const name="transfer_within_a_station-fill";
export const id="dl_16b6cb8c932bfa291f67";
export const url=new URL("../icons/transfer_within_a_station-fill.svg?v=2add8f8c523b8aa6fbf0ae8631f459f450921b7839f27a1804dd693346b09044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
