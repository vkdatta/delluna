export const name="wc-fill";
export const id="dl_9f65e5652e97496ab452";
export const url=new URL("../icons/W/wc-fill.svg?v=2b06a2ebb2d24adb8b0c7ee64b6ee7950c659daddf1ed18f5763cefa19c4a383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
