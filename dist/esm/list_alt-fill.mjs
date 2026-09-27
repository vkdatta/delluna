export const name="list_alt-fill";
export const id="dl_7181bc1724a9e1b1e6e3";
export const url=new URL("../icons/list_alt-fill.svg?v=c1db57d9ff15281599b526a5bba0f4acee72106cf7220fbb064eeeb0c139961e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
