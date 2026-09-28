export const name="screenshot_monitor";
export const id="dl_843ed8a01612f7a0ee7b";
export const url=new URL("../icons/screenshot_monitor.svg?v=5246a74c4ba4030bdc3118d4e8a28d78644732fe6e05cddd50ca9b446b1fbe1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
