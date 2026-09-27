export const name="podcasts-fill";
export const id="dl_e2b7a9967fd08e3b1173";
export const url=new URL("../icons/podcasts-fill.svg?v=85835e863f6599e8924fa459d0fdb7034bbbd2566526e67a3fe74ccdce2c188b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
