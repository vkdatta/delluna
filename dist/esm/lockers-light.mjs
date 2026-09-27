export const name="lockers-light";
export const id="dl_6e45d3c72d70494e8b49";
export const url=new URL("../icons/lockers-light.svg?v=1937b8c1a8d019d170dc9b41a3939a199f25816ce4129c5b717f0b80cb5e45e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
