export const name="image-square-duotone";
export const id="dl_91781c9a6fe148bb9dbd";
export const url=new URL("../icons/image-square-duotone.svg?v=cd8f792003551390dfbacdb8e8fe5fc6802e8d0adf756553d2e7684129d73fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
