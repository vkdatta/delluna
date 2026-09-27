export const name="lucid_1-airplay";
export const id="dl_07384a3abf1941b3ac3f";
export const url=new URL("../icons/lucid_1-airplay.svg?v=1fc78e1101ced4542d6efde9f7d7bd30b119af50ed30e514db7b839d3328e6d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
