export const name="file-svg-fill";
export const id="dl_8e5cc18f7f09445a91d9";
export const url=new URL("../icons/file-svg-fill.svg?v=08548961882b7caa3c1bc149f5a60eca35991e01bfdc1287d9a7e37ccca04090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
