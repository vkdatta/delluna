export const name="local_hospital-fill";
export const id="dl_e8ae2c3de4d4953dd1ba";
export const url=new URL("../icons/local_hospital-fill.svg?v=29c154359a43eca0e0c212cc2ecc7949a3e96e060423b578c08d1ddcce6b4c77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
