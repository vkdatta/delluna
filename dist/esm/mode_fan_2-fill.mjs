export const name="mode_fan_2-fill";
export const id="dl_2750a1f4e6c25cd11389";
export const url=new URL("../icons/mode_fan_2-fill.svg?v=8e123f4e1986c1f34e09f1f1d6e765ec12a61a5cc225cc0e6ee5bb2e2f4019ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
