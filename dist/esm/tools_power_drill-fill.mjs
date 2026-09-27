export const name="tools_power_drill-fill";
export const id="dl_577a10ad6ba8ff9405bb";
export const url=new URL("../icons/tools_power_drill-fill.svg?v=d35e9b2693c622d28edda074babdc3110ceb3c5aeb710a63712e596b08685e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
