export const name="user-lock";
export const id="dl_dc5fa1bb7321412089c2";
export const url=new URL("../icons/user-lock.svg?v=71e6089c1cc722ef5b3fe24f9a95fd80b000c559052117ae6340c4919953ee42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
