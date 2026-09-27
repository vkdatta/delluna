export const name="speaker-none-fill";
export const id="dl_e0176a1822e8953b53d6";
export const url=new URL("../icons/speaker-none-fill.svg?v=4294ff332118eabab5232d698bbb005736ddfc4f705b1bf9eb379c3cebb68dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
