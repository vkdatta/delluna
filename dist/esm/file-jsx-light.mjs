export const name="file-jsx-light";
export const id="dl_8e4ae84e871d43d882ba";
export const url=new URL("../icons/file-jsx-light.svg?v=e7b23968436a1d8920e4f94a03cf3e35010e95447c135abec0a708c0a261d8f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
