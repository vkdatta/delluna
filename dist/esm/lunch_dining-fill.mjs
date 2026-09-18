export const name="lunch_dining-fill";
export const id="dl_8102df23b6a44a50bb8c";
export const url=new URL("../icons/L/lunch_dining-fill.svg?v=e8d913ef2fca87262ef79d7df0e6dd4f5be8106d942c899d3fb6902532725e89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
