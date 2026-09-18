export const name="things_to_do-fill";
export const id="dl_236cc490406c498db426";
export const url=new URL("../icons/T/things_to_do-fill.svg?v=e511b0d12205df32d2063d4fdf839beae3e16cdcdbfa3a51063af3e3b6b5cc59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
