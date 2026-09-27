export const name="flower-fill";
export const id="dl_c42d57bac35d4b44b62c";
export const url=new URL("../icons/flower-fill.svg?v=dcd4ea77c138aa954170220c1f26c092532cc4a9171348077b0f9fdc52902736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
