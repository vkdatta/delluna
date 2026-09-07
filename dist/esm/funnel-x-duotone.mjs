export const name="funnel-x-duotone";
export const id="dl_dbe48b5d0cfb45d1abfc";
export const url=new URL("../icons/funnel-x-duotone.svg?v=d922854413ffe90e388f73ea25d8e190d947954e69fb4f9f8e0ed5cd2de9cdb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
