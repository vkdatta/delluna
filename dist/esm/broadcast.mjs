export const name="broadcast";
export const id="dl_ec55c72aba3f4558b1ab";
export const url=new URL("../icons/broadcast.svg?v=e8377f3bf952fc637ca1ca31d5ea6f0917f9195d0bca9b2bfa3d6201b09c59e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
