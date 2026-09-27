export const name="keyboard-fill";
export const id="dl_d1bb3cd8441d4b609be5";
export const url=new URL("../icons/keyboard-fill.svg?v=f1300b793f967321012b31caeced906b4ef23dc82f5c2787b7b8a0b75eaf125a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
