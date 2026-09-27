export const name="night_sight_auto_off-fill";
export const id="dl_138a56f3d17ce2a7b9d0";
export const url=new URL("../icons/night_sight_auto_off-fill.svg?v=57e0fd443ed63ad7c0771a2396970ab1627e25befae7edf954120f1a56ccf5fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
