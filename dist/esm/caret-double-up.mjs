export const name="caret-double-up";
export const id="dl_3dc91df9643549439a02";
export const url=new URL("../icons/caret-double-up.svg?v=0543c8d0c3142b572e7f6a74b5cbddc18eace6ee57ca375fc55c89741db9097b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
