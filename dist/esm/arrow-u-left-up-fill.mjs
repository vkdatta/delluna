export const name="arrow-u-left-up-fill";
export const id="dl_06d4fd124a9548e69aa1";
export const url=new URL("../icons/arrow-u-left-up-fill.svg?v=da13009a49ab2c931cc6ff1372c47c8ef007c1316cb75454df51a770249b76b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
