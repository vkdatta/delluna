export const name="bluetooth_drive-fill";
export const id="dl_8d4702dc84ef2e378ba4";
export const url=new URL("../icons/bluetooth_drive-fill.svg?v=14d9f6923c80b1b8a7be151f396b06cb1f8f168f34ab036749e3bd82552a1121",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
