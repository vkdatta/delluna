export const name="users-three-bold";
export const id="dl_f2f512312a384d2ca307";
export const url=new URL("../icons/U/users-three-bold.svg?v=5246b7d9cc7e2011823f127b65278a3d9434bb0b008e9dedacd9f10ff33697c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
