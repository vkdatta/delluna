export const name="border_bottom-fill";
export const id="dl_a44bfaa7a589408a8f15";
export const url=new URL("../icons/border_bottom-fill.svg?v=c216c6c42f21789a580f0fdb247abf88330a98c542b0c8f56f9adbc53c946590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
