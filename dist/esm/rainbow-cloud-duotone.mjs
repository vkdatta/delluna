export const name="rainbow-cloud-duotone";
export const id="dl_1eb1078488fd4214be44";
export const url=new URL("../icons/rainbow-cloud-duotone.svg?v=a8f73b190c5df207689701cad7c5d1bdb65fb3d7155d47f82a9efb27b1458209",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
