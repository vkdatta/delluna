export const name="virus";
export const id="dl_c25f8c197e3e49f0afc8";
export const url=new URL("../icons/virus.svg?v=e0bc8249f3a0cabf451d49be0f8f97a95f359f411a9cba0cb3d143d8a124669d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
