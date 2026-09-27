export const name="fax-fill";
export const id="dl_2c1fcc2ad0ae717e3b8e";
export const url=new URL("../icons/fax-fill.svg?v=3d25c6263236ecb69a95d67dbb154eb282fe7a91b3318bf9b112f76733473c66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
