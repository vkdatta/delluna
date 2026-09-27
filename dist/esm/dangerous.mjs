export const name="dangerous";
export const id="dl_dc4136438bbda3f3d1a4";
export const url=new URL("../icons/dangerous.svg?v=c0eca5bee4066e3eb0d8c0b39d24a92ba9f403839103f7c8564d0443768e372d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
