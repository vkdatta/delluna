export const name="shield-star-bold";
export const id="dl_fa942809e37cbae2c7bc";
export const url=new URL("../icons/shield-star-bold.svg?v=ddab85db21fa9023639b8b03ee684ad9726a6f29dcc3be1de389f11396ee48f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
