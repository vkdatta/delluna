export const name="owl";
export const id="dl_98c606745b807fafdf5d";
export const url=new URL("../icons/owl.svg?v=f3d8cce1600d22a3a568b100168d44a8771e448742c6cb6dee06c53c2b3e8467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
