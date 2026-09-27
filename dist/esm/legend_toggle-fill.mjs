export const name="legend_toggle-fill";
export const id="dl_0a409e9d251ccc846519";
export const url=new URL("../icons/legend_toggle-fill.svg?v=943896bedaf68854877c291563890f1b07ab98831bf80694bdfa36bfa26a05ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
