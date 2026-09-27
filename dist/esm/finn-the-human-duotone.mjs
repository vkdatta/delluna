export const name="finn-the-human-duotone";
export const id="dl_ffaaafdf707c466fbb37";
export const url=new URL("../icons/finn-the-human-duotone.svg?v=285a0c1e9e6528b4ffb283ec3d070c2f435d1a9e89d7e80667a71b52d98abf99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
