export const name="pinch_zoom_out-fill";
export const id="dl_1df9c0c18409c60f8dd1";
export const url=new URL("../icons/pinch_zoom_out-fill.svg?v=2a19d9a0fb695736156e10bccfe3276a7d219e3aa389ceefc7e695a9eeb56150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
