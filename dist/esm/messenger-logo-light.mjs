export const name="messenger-logo-light";
export const id="dl_91b2cd5d4c964f638c16";
export const url=new URL("../icons/messenger-logo-light.svg?v=f180bfd158af618bd495041cce35987d6c6e155962e1e1011340a91f94ee3d08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
