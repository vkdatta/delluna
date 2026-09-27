export const name="multiple_airports";
export const id="dl_fa1fbbeb93f864971cde";
export const url=new URL("../icons/multiple_airports.svg?v=add11b8a01a5de8af0e2b9934f5efe528c5ed9b73270889ecd5e21b5e912db80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
