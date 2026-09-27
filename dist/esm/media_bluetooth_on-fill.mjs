export const name="media_bluetooth_on-fill";
export const id="dl_5f210a2c412dacadb093";
export const url=new URL("../icons/media_bluetooth_on-fill.svg?v=25046a3a9afcd68e1c4cd5b184f5cb03c273969dbd5a785ca349b52403119a95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
