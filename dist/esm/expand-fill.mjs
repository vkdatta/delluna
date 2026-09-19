export const name="expand-fill";
export const id="dl_4086b2cedc43449d8e24";
export const url=new URL("../icons/expand-fill.svg?v=3df84200e5ae9d33e9e162556e55e984c8201bf280e9a2df4170ac10cfa33ff9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
