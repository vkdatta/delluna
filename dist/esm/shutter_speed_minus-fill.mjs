export const name="shutter_speed_minus-fill";
export const id="dl_668934c7ccb69095b623";
export const url=new URL("../icons/shutter_speed_minus-fill.svg?v=4ba12f87a4a615b9fe279b5ecb425a3152ecf1386de0efc6bee0549e90d1130c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
