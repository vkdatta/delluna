export const name="battery-vertical-empty-duotone";
export const id="dl_5f88704e29a64ca4bf7e";
export const url=new URL("../icons/battery-vertical-empty-duotone.svg?v=9649c8220916e844a308f176ee75d905522a74a91e7c1a0a9cd60cf03787b26c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
