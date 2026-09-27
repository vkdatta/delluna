export const name="subdirectory_arrow_right-fill";
export const id="dl_0fe41ded6ac4a0c69d14";
export const url=new URL("../icons/subdirectory_arrow_right-fill.svg?v=1e7a0f73c2b7b8bb7f4fac49a35339b3bdfe9f14123fdfc65bab6668b9a30570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
