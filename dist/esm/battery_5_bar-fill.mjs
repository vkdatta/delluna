export const name="battery_5_bar-fill";
export const id="dl_36b88349d76ec647f5bb";
export const url=new URL("../icons/battery_5_bar-fill.svg?v=dfccaa84e906a581891e39a45e72f4035ff03f8e7fe4a6e24d035ea403d463ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
