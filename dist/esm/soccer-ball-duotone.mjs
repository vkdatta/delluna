export const name="soccer-ball-duotone";
export const id="dl_a45b88b50436d0bd3680";
export const url=new URL("../icons/soccer-ball-duotone.svg?v=b00b1f05babe702ed868097f65729e2ce256473ff3d7173c167b169a2b8fcb9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
