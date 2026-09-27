export const name="synagogue-duotone";
export const id="dl_ecdca01296db3d6c4935";
export const url=new URL("../icons/synagogue-duotone.svg?v=3a94e7b1a52a8cbb059a1a7b22328e34dacb151cc1938ccd2b07415f13dcc6d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
