export const name="monitor";
export const id="dl_3c30b7a3b2fc49c2b868";
export const url=new URL("../icons/monitor.svg?v=8fcbb6204cbe4a04e66d09a4d0c63c8e4325134142ccfecc5bce598be56ae667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
