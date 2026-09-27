export const name="arrow-arc-left-duotone";
export const id="dl_cb904af5f28d4b2ab399";
export const url=new URL("../icons/arrow-arc-left-duotone.svg?v=03474f574da7aa63c1cfb66e603e7a7c401a1c0bffb3643103497363c3f90efc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
