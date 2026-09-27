export const name="aod_tablet";
export const id="dl_6320a7eae5e5d307d245";
export const url=new URL("../icons/aod_tablet.svg?v=22b6c33c3f50492ec035eb7a73e66dbf0726faea05b2d3001400332035344a30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
