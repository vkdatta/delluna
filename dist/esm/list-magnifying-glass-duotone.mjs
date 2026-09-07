export const name="list-magnifying-glass-duotone";
export const id="dl_50e938e866e84ca7b19a";
export const url=new URL("../icons/list-magnifying-glass-duotone.svg?v=0c1d0119923953cdb33d9773d0c0bd27d0aa6d65746c5191e30d63b7763e4a9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
