export const name="lucid_1-armchair";
export const id="dl_b7a2a7a288dc459aba9c";
export const url=new URL("../icons/lucid_1-armchair.svg?v=22f9a5c359f552a129b6a99af13969e17c602ca292ac45026ce52bcaa111f1ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
