export const name="ev_station-fill";
export const id="dl_06b1a536c77a3120f9f5";
export const url=new URL("../icons/ev_station-fill.svg?v=6add472d52dfe8aae54c583f33856a825faff97d86d387b114392b0ff4ed3d63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
