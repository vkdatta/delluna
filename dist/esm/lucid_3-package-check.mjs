export const name="lucid_3-package-check";
export const id="dl_a862c7c27eb14d059cc2";
export const url=new URL("../icons/lucid_3-package-check.svg?v=2d5654cb05a8846be1817210a9432b5ec199964e6772cb8c6484256b2a4f76ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
