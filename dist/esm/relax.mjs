export const name="relax";
export const id="dl_e6598e50970a46ce9559";
export const url=new URL("../icons/relax.svg?v=934565ba56d3d2381eb210a91777e9a8c926b37c21b3285beedfcdbc003f4a12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
