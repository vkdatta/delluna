export const name="sunny";
export const id="dl_4ef708369c2ce0215dfe";
export const url=new URL("../icons/sunny.svg?v=db91996affced06a6b1ddf4e338458c855a9b9ac5d5ad858eb998509c0c57f64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
