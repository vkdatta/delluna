export const name="snooze-fill";
export const id="dl_0d0569eb4b39fb394fb3";
export const url=new URL("../icons/snooze-fill.svg?v=ee26f06616e4f30a7e102fa9b7cab1a38ae95519cdcaa2c467cc0caa0f59adb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
