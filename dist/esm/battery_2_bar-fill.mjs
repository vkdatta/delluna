export const name="battery_2_bar-fill";
export const id="dl_c6abb07d68b14ed78d49";
export const url=new URL("../icons/battery_2_bar-fill.svg?v=fe94fe9a8d61b7a4474890b5a710f1a1d105df4cc92232811414c9f79298d7f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
