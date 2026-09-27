export const name="airplanemode_inactive-fill";
export const id="dl_565e3a7cafa97bca71da";
export const url=new URL("../icons/airplanemode_inactive-fill.svg?v=8de4eefcf25a607e368654e932bb26e4469b472b7bfa42a14d582780a38e5c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
