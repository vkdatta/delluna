export const name="dropdown_menu-fill";
export const id="dl_f74a13fb26224cab81cb";
export const url=new URL("../icons/D/dropdown_menu-fill.svg?v=f52949040f096c0c1c2e5a6c6de6c966ed482a33e2f607a23ea5e83f9887e549",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
