export const name="wifi-fill";
export const id="dl_185c74f95b85eb1ed7bc";
export const url=new URL("../icons/wifi-fill.svg?v=cba3eb6c4a528ce39f5811d6b8bfe0db135240cec3011ec6059816f34ec0dc2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
