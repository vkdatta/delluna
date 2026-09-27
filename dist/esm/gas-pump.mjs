export const name="gas-pump";
export const id="dl_b9fa1ae683da4a0ba4c6";
export const url=new URL("../icons/gas-pump.svg?v=2e1384408c12e7346ee5589aaef4ae26708f69c81ea151d13ddb67adb42c84ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
