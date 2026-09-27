export const name="sync_saved_locally_off";
export const id="dl_c77becfe441a7882c6b5";
export const url=new URL("../icons/sync_saved_locally_off.svg?v=87d41d4369e7c5e3e10f09d8ec58248489efd4b986cfe773802a7949c5c61df1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
