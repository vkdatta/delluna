export const name="live_help-fill";
export const id="dl_431d9380fb2dd064b646";
export const url=new URL("../icons/live_help-fill.svg?v=0f9fe8dc6764f572d0e2afc604a0e0a40c77aa279e27db1106419f9d17aeef89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
