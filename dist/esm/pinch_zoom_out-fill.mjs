export const name="pinch_zoom_out-fill";
export const id="dl_0170905259a7e5e656bd";
export const url=new URL("../icons/pinch_zoom_out-fill.svg?v=dd1c19e69c50c049e0ac4e513e18b7a4320ce4de3bffff3b793704f8055bb413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
