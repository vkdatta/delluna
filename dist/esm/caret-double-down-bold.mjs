export const name="caret-double-down-bold";
export const id="dl_406c27b0313148d5a3d5";
export const url=new URL("../icons/caret-double-down-bold.svg?v=97779c5afbd55d0d803d69760f6f14b438c5a2e114216b430e0623cd4600dc78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
