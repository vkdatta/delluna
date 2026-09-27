export const name="arrow_forward";
export const id="dl_7bd279ff9ccc1cd6e863";
export const url=new URL("../icons/arrow_forward.svg?v=77c14e6ad4a21337dba88526f7d8131cdc2c2e5cf87b3cb183a569ad77dd31b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
