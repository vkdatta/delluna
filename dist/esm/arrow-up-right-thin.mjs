export const name="arrow-up-right-thin";
export const id="dl_cd2d1d9a96f641dabb5f";
export const url=new URL("../icons/arrow-up-right-thin.svg?v=81b1799029bef000011b0802bd2c168d15711d601ef6a7aff3b395ddb1dec7d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
