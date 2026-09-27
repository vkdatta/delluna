export const name="tray-arrow-down";
export const id="dl_94730756187ebaa5815c";
export const url=new URL("../icons/tray-arrow-down.svg?v=5636f01085ff8972bab12eb36730e55e12b7d26cfca27d426fdc83a922e1eb03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
