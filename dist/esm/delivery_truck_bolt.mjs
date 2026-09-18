export const name="delivery_truck_bolt";
export const id="dl_f8a982948ed54fc9a2f5";
export const url=new URL("../icons/delivery_truck_bolt.svg?v=00cb5020e74c2f6e1c9b6af254f27222112795cfd5716ab1674b3943012fbd1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
