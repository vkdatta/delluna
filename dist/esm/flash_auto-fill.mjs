export const name="flash_auto-fill";
export const id="dl_6177aaf10a3b832b1c50";
export const url=new URL("../icons/flash_auto-fill.svg?v=333b49aac29dc8ba4b922ec16e23f954becc6f9cd6c10c3d0d84809f8b422307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
