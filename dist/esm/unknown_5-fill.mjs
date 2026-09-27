export const name="unknown_5-fill";
export const id="dl_cf13dedd0aa97b951e15";
export const url=new URL("../icons/unknown_5-fill.svg?v=88c968c38124935687c403c2424e66fe58f825c0067e3dc625399a3253738a13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
