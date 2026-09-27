export const name="business_chip";
export const id="dl_04f31f462dbee570e0bb";
export const url=new URL("../icons/business_chip.svg?v=1d1c6f261994e5751fff19bd613cb8edd4b0d434cf77ac726d96861d9799d171",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
