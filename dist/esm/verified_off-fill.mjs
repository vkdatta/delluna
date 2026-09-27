export const name="verified_off-fill";
export const id="dl_ef68c5797d4880d831d6";
export const url=new URL("../icons/verified_off-fill.svg?v=5a0e31b8c81c44b319d13d5619493e2130a9fd13a0740fd857014c0f4c4b2df1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
