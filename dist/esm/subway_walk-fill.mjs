export const name="subway_walk-fill";
export const id="dl_274e3b81f9d5e9c2f972";
export const url=new URL("../icons/subway_walk-fill.svg?v=0022b1de7a5056a1e51d369a4317cd2f96c28ebac1d059b49e88bd1f32c47fb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
