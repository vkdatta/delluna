export const name="arrow-bend-double-up-left-thin";
export const id="dl_bbb8feed7e0346e8bda4";
export const url=new URL("../icons/arrow-bend-double-up-left-thin.svg?v=bbc6e9ea27e90e851e2e6356e97157916d554187d62799a13831017b3ff6cbe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
