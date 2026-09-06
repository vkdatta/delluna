export const name="rectangle-dashed";
export const id="dl_11c43eb26011487e965a";
export const url=new URL("../icons/rectangle-dashed.svg?v=e3968a7f2afce1c47e7371e3c8948ca66337a8dc3349b76d572864c41af1dff2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
