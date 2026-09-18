export const name="lab_profile";
export const id="dl_2b0a9c0d133b429290a6";
export const url=new URL("../icons/lab_profile.svg?v=b45d08910e5a10db7ffcdf5fec45a6163b9ad46659de2af2383d911badd8e738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
