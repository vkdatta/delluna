export const name="usb-thin";
export const id="dl_cd876ab3e35be3af909e";
export const url=new URL("../icons/usb-thin.svg?v=b25fae733f405691816350bccda55e648bd26dd6dc8e5f2db82d8c9c28743056",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
