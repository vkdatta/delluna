export const name="number-circle-three-duotone";
export const id="dl_fdeb86756fc049d684d6";
export const url=new URL("../icons/number-circle-three-duotone.svg?v=89dad3b2cc15d881e4238a490026246dfcfec4111bc6dbc3de713b3fe646cd83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
