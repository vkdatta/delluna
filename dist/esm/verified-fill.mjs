export const name="verified-fill";
export const id="dl_3999389873cd4636a7e6";
export const url=new URL("../icons/V/verified-fill.svg?v=8ad9ef46a7581ee907f4cfca901ef788829a06c6597906511ee6165c3d9b6b24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
