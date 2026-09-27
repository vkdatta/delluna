export const name="lucid_1-airplay";
export const id="dl_07384a3abf1941b3ac3f";
export const url=new URL("../icons/lucid_1-airplay.svg?v=038f7a2b8caaa825624b46d931bec1cf121b9fadc8e19098f927d4866d44a97b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
