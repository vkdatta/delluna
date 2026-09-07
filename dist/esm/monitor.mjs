export const name="monitor";
export const id="dl_3c30b7a3b2fc49c2b868";
export const url=new URL("../icons/monitor.svg?v=ac9005f7dd981b06b7c029b3625bf908ded63e0dc52e781ad550ae2ef621f86a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
