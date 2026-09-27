export const name="phone-duotone";
export const id="dl_7affc38968d148808b95";
export const url=new URL("../icons/phone-duotone.svg?v=1d8b0a3b89c3b5979dedf5b43d0f5548c737562b1dba3c073b87fdf6bc90e534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
