export const name="caret-circle-double-right-light";
export const id="dl_b26a36e571b849649088";
export const url=new URL("../icons/caret-circle-double-right-light.svg?v=6ae211f822c553ed00606b327c323bd659ffb55e2ed83eb0389b258ea0dc5e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
