export const name="menu";
export const id="dl_f23f65477f2a44f19ecf";
export const url=new URL("../icons/icons-svg/menu.svg?v=95ba6c7a771f7e6da22b5920099b097f9c041a012c97c0543c238021e8866479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
