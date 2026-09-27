export const name="arrow-u-right-down-fill";
export const id="dl_cf6198fd44e24d2fb944";
export const url=new URL("../icons/arrow-u-right-down-fill.svg?v=139d12ae73b40b6eea5cdb133d993a43cb35c29f0d5b9d0514d083c66e73160a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
