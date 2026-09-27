export const name="line-segments-duotone";
export const id="dl_d5cd66d7702b41e9bf34";
export const url=new URL("../icons/line-segments-duotone.svg?v=dc83e7f29997f0ac1c0b3e277a93983555242e638c92743398e206b19e618be5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
