export const name="arrow-circle-down-bold";
export const id="dl_c8eb6d9f14ae4a0e8340";
export const url=new URL("../icons/arrow-circle-down-bold.svg?v=0a9ac1f5f5cd4941a495d0c1243a6ddf6d9f879b00ce1eada57c7309b924174a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
