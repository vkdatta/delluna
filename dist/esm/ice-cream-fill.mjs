export const name="ice-cream-fill";
export const id="dl_6cc97e09cf5a4602b571";
export const url=new URL("../icons/ice-cream-fill.svg?v=affb1433120f175d48295dbb52b99f090efd56bf03d357c1d26135911d7a752e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
