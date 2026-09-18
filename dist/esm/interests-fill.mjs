export const name="interests-fill";
export const id="dl_d0aa19460d2e442092b6";
export const url=new URL("../icons/I/interests-fill.svg?v=f86f23117a64b76c1aa8757579401aa5d6afae921923d4433f68268d53c0b823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
