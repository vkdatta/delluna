export const name="admin_meds-fill";
export const id="dl_e15372b3395f7e287f81";
export const url=new URL("../icons/admin_meds-fill.svg?v=97a374739530fbeb4894fd1ad35fdf6f7e416f3cbd9ce9db4a843376f6ca190a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
