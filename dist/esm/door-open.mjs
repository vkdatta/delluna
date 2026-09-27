export const name="door-open";
export const id="dl_101f5f25a7bc4f0bade1";
export const url=new URL("../icons/door-open.svg?v=68d268bff1351800bfdfdeb1d49e84e20ad2e12b8f5600d8196a91e5bd071589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
