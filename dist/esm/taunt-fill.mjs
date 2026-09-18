export const name="taunt-fill";
export const id="dl_a9c0f7d89815478aa056";
export const url=new URL("../icons/taunt-fill.svg?v=3cff882f5f51a82b304bd6f610f80cffe1b7bfac73714c63b2678cf3ce2a599c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
