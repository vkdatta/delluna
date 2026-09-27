export const name="chart-scatter-duotone";
export const id="dl_f97314cb284042008727";
export const url=new URL("../icons/chart-scatter-duotone.svg?v=311c673f7e9384e8c03b82ad00aee8f22c22506c5882ab23027233e0a7002e89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
