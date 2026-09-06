export const name="arrow-square-left-fill";
export const id="dl_056bbcbf30db44b49f74";
export const url=new URL("../icons/arrow-square-left-fill.svg?v=3a3efc726d5a1456f73cefe66958b4361b9aa30cc5584b3395518ba3c42fc1ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
