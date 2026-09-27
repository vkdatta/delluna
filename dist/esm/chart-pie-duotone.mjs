export const name="chart-pie-duotone";
export const id="dl_e4d800d68eee449db1a2";
export const url=new URL("../icons/chart-pie-duotone.svg?v=a47ff1e5ecb6f65267242fe14f5a492bb9a3ff18cd57606da10eaf183470b625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
