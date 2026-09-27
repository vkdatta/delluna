export const name="arrow-clockwise-light";
export const id="dl_170e6bac50f64a9eba2f";
export const url=new URL("../icons/arrow-clockwise-light.svg?v=01ed71299531e1b6984e09358dee757d9c50b46f6c6a8deeb287d2bcf464844b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
