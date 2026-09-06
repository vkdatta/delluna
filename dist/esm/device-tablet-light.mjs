export const name="device-tablet-light";
export const id="dl_df049235e7bb4c3a95bf";
export const url=new URL("../icons/device-tablet-light.svg?v=eb0991b440a90db2b55486f238baccdbda5c97639c3c36a8c5d7ade5664c7393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
