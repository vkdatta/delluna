export const name="alarm_add-fill";
export const id="dl_ff1036ccb990956895dc";
export const url=new URL("../icons/alarm_add-fill.svg?v=b38e634c069e9a75f859583b16e5c68ca39f052be5138a0aabc4b6a7363d7df1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
