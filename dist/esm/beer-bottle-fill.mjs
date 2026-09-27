export const name="beer-bottle-fill";
export const id="dl_e9f45b8af8ee461fa6b1";
export const url=new URL("../icons/beer-bottle-fill.svg?v=bfa8db0b59077a3946230ce0c16b2be8e1c29c1238fdd0b3647d43372ea0a7cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
