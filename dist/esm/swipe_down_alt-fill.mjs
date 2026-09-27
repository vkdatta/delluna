export const name="swipe_down_alt-fill";
export const id="dl_c3a631d972783ce4f389";
export const url=new URL("../icons/swipe_down_alt-fill.svg?v=5e7fe7769b5ab4ecbc61ecb612622ac07d047d4e7225adffc2979e8a722d5a61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
