export const name="map";
export const id="dl_61181479531b4fa4a77f";
export const url=new URL("../icons/map.svg?v=d4926e72b877fc1be9869fc99e4ad7ebb19f5f86573b1e7a6af9ea4fc7a42b12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
