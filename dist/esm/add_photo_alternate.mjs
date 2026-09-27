export const name="add_photo_alternate";
export const id="dl_f7744969e1bafc04b633";
export const url=new URL("../icons/add_photo_alternate.svg?v=2f2e67c9671b32532797a38ee104193e90557fae972afb800868fc0c99479f85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
