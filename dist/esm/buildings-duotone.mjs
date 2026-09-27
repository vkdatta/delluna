export const name="buildings-duotone";
export const id="dl_1c5bba615ba3412b9f6a";
export const url=new URL("../icons/buildings-duotone.svg?v=952463ab37e06829e2c4be51b62b80cbcee6f6193c3c3020e336af46f91b41e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
