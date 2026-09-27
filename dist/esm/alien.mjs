export const name="alien";
export const id="dl_1b162916722a496db308";
export const url=new URL("../icons/alien.svg?v=15d88bd0a3fd12619acae06cd935e5bdf93b44853915f69176a3fbf5cefcd2be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
