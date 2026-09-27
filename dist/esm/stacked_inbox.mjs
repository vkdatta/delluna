export const name="stacked_inbox";
export const id="dl_4392b12853d5dc13377b";
export const url=new URL("../icons/stacked_inbox.svg?v=b0175086dc514c1f9880cf04432f0120cd8006d88a223225f9c580542345df10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
