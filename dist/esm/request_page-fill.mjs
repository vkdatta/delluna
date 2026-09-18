export const name="request_page-fill";
export const id="dl_1b790faf38dd49d1b9b1";
export const url=new URL("../icons/R/request_page-fill.svg?v=f74874ffa5ba6f6d30f105cee4a85a866c3ba20f15a02e35f16bebc9cf6ad854",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
