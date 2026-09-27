export const name="mic_off-fill";
export const id="dl_c042b5f8c2fec020c04a";
export const url=new URL("../icons/mic_off-fill.svg?v=e889bc48c06bbab1cefd82c0d278a9ed9c3450a5e56d59a191feb3c2ab0253a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
