export const name="view_compact_alt";
export const id="dl_0b3747cffd6dfc0a55e3";
export const url=new URL("../icons/view_compact_alt.svg?v=c43df7d0c11b34e3719a7530606853a343e3a36d8a2420eb6ee8e12b117b4915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
