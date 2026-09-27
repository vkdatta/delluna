export const name="transfer_within_a_station-fill";
export const id="dl_8270a5b9a5b81419cccb";
export const url=new URL("../icons/transfer_within_a_station-fill.svg?v=2c9d3f17830fce8e8c33a54f8018992a0cc4390cfaba09ba107e43b85ac38849",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
