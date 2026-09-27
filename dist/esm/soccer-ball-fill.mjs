export const name="soccer-ball-fill";
export const id="dl_ecca459068654ee6606e";
export const url=new URL("../icons/soccer-ball-fill.svg?v=2a529544b93d8dc49dc4ad9fc534e3c2ba234f785bc4f7c1f913720a18aa0645",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
