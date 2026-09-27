export const name="cancel";
export const id="dl_20c8a97ffb655ab4a750";
export const url=new URL("../icons/cancel.svg?v=5cc66261ed1b3421cb5d4bc1f852825b07d9ff947fd10e74dc965a644e39c2b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
