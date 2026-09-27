export const name="frame_person_off-fill";
export const id="dl_9eef0ab6330559d4b173";
export const url=new URL("../icons/frame_person_off-fill.svg?v=eacd08e99ec7e01078b79a45c1e3334775aa518be459e75a122443da37edcfb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
