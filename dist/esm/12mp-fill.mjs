export const name="12mp-fill";
export const id="dl_e2f61ffa99da28d6580b";
export const url=new URL("../icons/12mp-fill.svg?v=bc5f7adb83f0ae1d2f3f90ddd431d97fed170f460f29abac83387d1064568f0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
