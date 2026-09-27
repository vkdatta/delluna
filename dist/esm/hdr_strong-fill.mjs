export const name="hdr_strong-fill";
export const id="dl_35a91b3c8154b95942f4";
export const url=new URL("../icons/hdr_strong-fill.svg?v=9423ce8d2cf5f9c95b5e523f3dda1c4e32b4303861f3c42b1e36395cecd01726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
