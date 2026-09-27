export const name="route-fill";
export const id="dl_3e896d5166bb6d2c2898";
export const url=new URL("../icons/route-fill.svg?v=fbea5da8aa13735d6611c35ac4f826b88a148e95c5c2e07593e8397aceed7bb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
