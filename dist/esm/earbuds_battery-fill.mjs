export const name="earbuds_battery-fill";
export const id="dl_72dc02e47d8eef59bfa8";
export const url=new URL("../icons/earbuds_battery-fill.svg?v=236dfb5cf2132f46eaa54130c0193dbe0eb6719a93c10db6288bf8dde710fb6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
