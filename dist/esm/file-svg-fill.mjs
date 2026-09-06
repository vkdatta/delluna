export const name="file-svg-fill";
export const id="dl_8e5cc18f7f09445a91d9";
export const url=new URL("../icons/file-svg-fill.svg?v=23e8e29e972519f34de0209edb6cf5c32ff337b62fca39ebba2b09c7932a75b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
