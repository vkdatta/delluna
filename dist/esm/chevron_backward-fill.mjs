export const name="chevron_backward-fill";
export const id="dl_1f18fd63a3234e6bba8f";
export const url=new URL("../icons/C/chevron_backward-fill.svg?v=acfb557c3b13b437597f6c128da7ac39245708ca57d865d29e33cf8161369a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
