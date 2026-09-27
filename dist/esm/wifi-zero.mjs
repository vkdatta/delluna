export const name="wifi-zero";
export const id="dl_75a318ca98e144b8b154";
export const url=new URL("../icons/wifi-zero.svg?v=764849e9e774a4c8dfaab7cb57bb8c6c25748438b8313836128d601550a1872d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
