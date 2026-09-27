export const name="meteor-duotone";
export const id="dl_08cbdb39a9254cf4b530";
export const url=new URL("../icons/meteor-duotone.svg?v=ec54a17fcbc1cdd660924fdf00307e090dff96f45f24160fb3f2e1cd49f90457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
