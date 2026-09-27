export const name="manage_history-fill";
export const id="dl_8be2f5404cf94cc0e3d1";
export const url=new URL("../icons/manage_history-fill.svg?v=c6828318d809a0ad5f8a6e76869fd4e45d8af68e20b665cfba55c75e3f90bd3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
