export const name="co_present-fill";
export const id="dl_c0a55edc9d1fa88ccf77";
export const url=new URL("../icons/co_present-fill.svg?v=f4cd8e98fac058676ea54fd5df7a6a1c1dea81840628e9cdeb6313a220703143",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
