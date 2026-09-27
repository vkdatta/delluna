export const name="bike_dock-fill";
export const id="dl_7b45965a10138b6bf700";
export const url=new URL("../icons/bike_dock-fill.svg?v=24badf27967e9872b44b63d2dfaec36852ad7a2baa52556e0457a5bbcb816ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
