export const name="aod_tablet-fill";
export const id="dl_4dca7bcf9556fcb20340";
export const url=new URL("../icons/aod_tablet-fill.svg?v=42a435816017fb2b395bb3d935d9ca4f1c9eb212b2182028af18edc913dc34b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
