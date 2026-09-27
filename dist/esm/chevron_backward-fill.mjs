export const name="chevron_backward-fill";
export const id="dl_582c7a6a6189ee6dff89";
export const url=new URL("../icons/chevron_backward-fill.svg?v=acfb557c3b13b437597f6c128da7ac39245708ca57d865d29e33cf8161369a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
