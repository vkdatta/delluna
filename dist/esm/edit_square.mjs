export const name="edit_square";
export const id="dl_bd6d2a472afae214d483";
export const url=new URL("../icons/edit_square.svg?v=f07c31ce80df64593ad868b3e4ef23f95a7af09a7832b89d3bccddfd5035189e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
