export const name="router-fill";
export const id="dl_f074585e84733a25dbab";
export const url=new URL("../icons/router-fill.svg?v=aeb242bf27b5009afb47b79e4a7c64839cfc1acd0a142b6c4e3fe7aaeb792aa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
