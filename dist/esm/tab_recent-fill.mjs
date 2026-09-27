export const name="tab_recent-fill";
export const id="dl_454fed5c29d0b5a8fe4a";
export const url=new URL("../icons/tab_recent-fill.svg?v=66d627b148a673197d1dff4c6fc7c884416ad7998d7820a0cec0ff35384c673b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
