export const name="map-trifold-bold";
export const id="dl_a1ea68bc309e4f5e8b53";
export const url=new URL("../icons/map-trifold-bold.svg?v=2cb4715be2549f82152a7c0e98fdf42848e83d550e072680b9149bc821224084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
