export const name="chart-scatter-duotone";
export const id="dl_f97314cb284042008727";
export const url=new URL("../icons/chart-scatter-duotone.svg?v=e42f07691249f19a23ffda0451f4b87a72d485cca2f983c2b239cd0a58e6dfff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
