export const name="railway_alert-fill";
export const id="dl_c3f2f7d21b443d3aa1c3";
export const url=new URL("../icons/railway_alert-fill.svg?v=9e6a0f1e4a1d96e27928eb09f9c7afd8dfdef17df96aaa09b2ef7653293f8a13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
