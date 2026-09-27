export const name="devices_fold";
export const id="dl_4beadd97ae554321f50b";
export const url=new URL("../icons/devices_fold.svg?v=af6bcdc6bd7990421f181cedf9f59aa31227e1419355ab69a50022bffe50f766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
