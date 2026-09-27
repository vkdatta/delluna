export const name="desktop-tower";
export const id="dl_e2b603e64b8546779695";
export const url=new URL("../icons/desktop-tower.svg?v=7f91d49d37f2a1540591097688100ed4d2957680debfce5c069c14ad28f14e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
