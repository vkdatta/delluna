export const name="cloud_lock-fill";
export const id="dl_87ceff52a7494a79fa38";
export const url=new URL("../icons/cloud_lock-fill.svg?v=1ee84fe2286cf130b40313dbc8285a4485f476328fa16b40f0d09274e23b2af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
