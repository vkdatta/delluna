export const name="lucid_2-image-plus";
export const id="dl_0e6588bc8fa34c8da0e4";
export const url=new URL("../icons/lucid_2-image-plus.svg?v=2797b81106632f3cd2662014791901586076af4435832c8fb399d8e00af590bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
