export const name="nest_wifi_point-fill";
export const id="dl_cc05ad9ee4c6400b8ca6";
export const url=new URL("../icons/nest_wifi_point-fill.svg?v=138b7e55fcb292f51a7c63b09d41159749e75a8cf7ffa8892dc9a74535235c73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
