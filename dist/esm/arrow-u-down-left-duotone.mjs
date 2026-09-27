export const name="arrow-u-down-left-duotone";
export const id="dl_6710836af46342c783b2";
export const url=new URL("../icons/arrow-u-down-left-duotone.svg?v=71bfd1f909dee698be1a4e034c36ce96305584425595ecf116d489ee7221dd12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
