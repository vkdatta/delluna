export const name="vr180_create2d";
export const id="dl_c1ce0b2cac24ede0efd8";
export const url=new URL("../icons/vr180_create2d.svg?v=ae327a846cb2463a38f913645be8abbe26fedb7a6ed5087cab5e2be11e04d20d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
