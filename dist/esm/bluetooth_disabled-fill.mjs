export const name="bluetooth_disabled-fill";
export const id="dl_3b1b80334a6e58a62324";
export const url=new URL("../icons/bluetooth_disabled-fill.svg?v=a37fca30dacee1316ab344bc1078172a587915163e16c3dc2e8abc466276b76f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
