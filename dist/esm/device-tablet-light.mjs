export const name="device-tablet-light";
export const id="dl_df049235e7bb4c3a95bf";
export const url=new URL("../icons/device-tablet-light.svg?v=7e48ab9cc0e07331807ddb41ff29d8704214be7ac2f72bff0055e5f9778ee5b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
