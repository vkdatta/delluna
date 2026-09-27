export const name="pi-bold";
export const id="dl_8b904957a2a94840b614";
export const url=new URL("../icons/pi-bold.svg?v=084fe4d9cee497fba266267ddd0c367fc4111016e3b9a49d66f85ad10f6c9448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
