export const name="transit_enterexit-fill";
export const id="dl_0335c562fbfde6022466";
export const url=new URL("../icons/transit_enterexit-fill.svg?v=3523d78fc6fe438fab71672e347674f9722e827ce905360ad4827f1965191912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
