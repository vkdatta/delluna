export const name="door-duotone";
export const id="dl_f300950a293741ee8799";
export const url=new URL("../icons/door-duotone.svg?v=3906273ccf5ba428092bbd5289350b234310d97c77d67335ba91e9d5e61c6a92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
