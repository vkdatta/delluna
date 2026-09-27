export const name="mobile_vibrate-fill";
export const id="dl_9e28784db75f07818d00";
export const url=new URL("../icons/mobile_vibrate-fill.svg?v=5ff824474e3aa29f8a29d6a16fa91e39d636d5cc8f91043ae5069dfedbdbbcc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
