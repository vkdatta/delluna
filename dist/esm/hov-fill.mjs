export const name="hov-fill";
export const id="dl_9cb735e61994a366de67";
export const url=new URL("../icons/hov-fill.svg?v=1fbc3461f989d108365c8dbb7a6fbbc344b2f80d79cc6d02ff21cfdfb021431b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
