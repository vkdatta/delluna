export const name="chart-polar-duotone";
export const id="dl_b7d43601093a47938627";
export const url=new URL("../icons/chart-polar-duotone.svg?v=2ad18fdbf33070f7346f3d74b6d69d39d361884270802f63a10727ffb361a2eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
