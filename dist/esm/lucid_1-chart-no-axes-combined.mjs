export const name="lucid_1-chart-no-axes-combined";
export const id="dl_6c04f02de0f643abb892";
export const url=new URL("../icons/lucid_1-chart-no-axes-combined.svg?v=24feb217e01233fd81b3897c7299322c70c6adff8dbd1ef074730b2454833c87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
