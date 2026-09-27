export const name="cell-signal-x-duotone";
export const id="dl_0cd69ea5eeb54be880b4";
export const url=new URL("../icons/cell-signal-x-duotone.svg?v=10cc2c2c891c48e59d07661eebe32aa499f4c71ca8e5dbc1615c2269b6d5039f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
