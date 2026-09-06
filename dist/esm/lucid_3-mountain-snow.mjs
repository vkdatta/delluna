export const name="lucid_3-mountain-snow";
export const id="dl_78dfd9f7651c42f5add0";
export const url=new URL("../icons/lucid_3-mountain-snow.svg?v=306beee3d9670a7123b6d2c86f45329507aead20c4bb62581dc2b9f98405019f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
