export const name="lucid_3-printer-x";
export const id="dl_c44dc97948a94c7e82eb";
export const url=new URL("../icons/lucid_3-printer-x.svg?v=5e7ba8534b5497ab74486b3cb05314eea218124aea846561bfd6fd8a9ad67c67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
