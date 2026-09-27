export const name="connecting_airports-fill";
export const id="dl_619822acdfba98272f4c";
export const url=new URL("../icons/connecting_airports-fill.svg?v=5948e6aceb01497e4f2dea56476f61634224689e05bced4859ec35c0cc7c5a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
