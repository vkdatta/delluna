export const name="router_off";
export const id="dl_e17b9185f369f8963754";
export const url=new URL("../icons/router_off.svg?v=921a7d70ba67d93b2f1ef1d3c1ff3ea5afeecf450a218a66fd8e76bbb1d03292",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
