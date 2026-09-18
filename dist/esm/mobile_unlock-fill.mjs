export const name="mobile_unlock-fill";
export const id="dl_ed2a4c8ec9a649bf9c7c";
export const url=new URL("../icons/mobile_unlock-fill.svg?v=bc0e27bdfa5ba3473195d80cfe953c444fd3174484c00d840167102989d83935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
