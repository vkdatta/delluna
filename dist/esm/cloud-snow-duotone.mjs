export const name="cloud-snow-duotone";
export const id="dl_1364c59225e14335a27b";
export const url=new URL("../icons/cloud-snow-duotone.svg?v=5c3d2d74052b19c38b8cd6a6326c4b12ef511c82256673872fa74f7de2b0d66a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
