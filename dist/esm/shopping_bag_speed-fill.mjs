export const name="shopping_bag_speed-fill";
export const id="dl_81d95d195f8ac6523d4d";
export const url=new URL("../icons/shopping_bag_speed-fill.svg?v=163d1f4a1eb640e69b5be13f7f08a0349a809419a5621dbe97133d9c613b430a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
