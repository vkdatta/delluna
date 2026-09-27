export const name="knife-duotone";
export const id="dl_f1f33775382d42359ee5";
export const url=new URL("../icons/knife-duotone.svg?v=5ec75ade7fe25d8db5d2dc211e64c52d46ba24f74bf402e5a5b8413808a2d9c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
