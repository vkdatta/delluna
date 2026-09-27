export const name="tent";
export const id="dl_56db3641bf81480589ee";
export const url=new URL("../icons/tent.svg?v=2a2c3dc1f3576c897f477747fe737a4e3ff253a0a5bc4bb37e1532065d16d2bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
