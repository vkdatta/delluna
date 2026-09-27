export const name="battery_change-fill";
export const id="dl_85009a1c1311569c74e7";
export const url=new URL("../icons/battery_change-fill.svg?v=f4d445ac5304839ae2610f7efe3b089c90832cce71188e3cbd9316ea82dc4a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
