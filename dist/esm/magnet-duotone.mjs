export const name="magnet-duotone";
export const id="dl_20428069ccb5427f9b3b";
export const url=new URL("../icons/magnet-duotone.svg?v=1922d1db7c67977c7a7d90951895e2afb4028c2b226dc49dc4db11b1d43ef658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
