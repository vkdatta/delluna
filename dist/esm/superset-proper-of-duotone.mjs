export const name="superset-proper-of-duotone";
export const id="dl_4c859c8af964789d1159";
export const url=new URL("../icons/superset-proper-of-duotone.svg?v=98256e5b8967c1e2e3c14e86792d23e6381f4e7c02e37a111f353593224a3c07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
