export const name="mobile_landscape";
export const id="dl_11448640a0749507e6b4";
export const url=new URL("../icons/mobile_landscape.svg?v=4cdc84f62ea3cdecfc25d45d9fc9174fc6fb55402dd9026c10144cb0bdaf0c1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
