export const name="tip-jar-duotone";
export const id="dl_ba3b414738633082a2a3";
export const url=new URL("../icons/tip-jar-duotone.svg?v=391aa1484062bc2139045749b0e1928b8986a096b1a1fe3306b71dbd7ef0f1f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
