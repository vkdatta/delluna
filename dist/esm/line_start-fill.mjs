export const name="line_start-fill";
export const id="dl_76928104f8e6de6d6542";
export const url=new URL("../icons/line_start-fill.svg?v=2ad9092f877cbff6439b26cff63c023e9752133f4f6e6635f7f0c115820ce649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
