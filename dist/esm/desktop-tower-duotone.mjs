export const name="desktop-tower-duotone";
export const id="dl_bd54b402f37742358b41";
export const url=new URL("../icons/desktop-tower-duotone.svg?v=5ba9b5afc088b1112e409afc0327a440e0a99b3ef81e6493e6ed07e479f96bdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
