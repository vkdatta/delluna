export const name="gesture_select";
export const id="dl_b01957ad8d7ce6d84268";
export const url=new URL("../icons/gesture_select.svg?v=02af483224e27a0f1356a62928a49fdfdd75241fc618f5eed685dafb760f3d94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
