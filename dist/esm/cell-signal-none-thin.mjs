export const name="cell-signal-none-thin";
export const id="dl_5ea1876f1f384654a583";
export const url=new URL("../icons/cell-signal-none-thin.svg?v=b089657d5bb28fa3ecc7f020f0786f97a7a5fb731a81df114c0ff6dd99dcdfc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
