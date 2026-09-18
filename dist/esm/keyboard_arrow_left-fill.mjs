export const name="keyboard_arrow_left-fill";
export const id="dl_9d591c0f6457411789b8";
export const url=new URL("../icons/keyboard_arrow_left-fill.svg?v=acfb557c3b13b437597f6c128da7ac39245708ca57d865d29e33cf8161369a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
