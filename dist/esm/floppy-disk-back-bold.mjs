export const name="floppy-disk-back-bold";
export const id="dl_7b28413f2f7342b29c14";
export const url=new URL("../icons/floppy-disk-back-bold.svg?v=bc4a240a7d39856394b616e83fcfd7c1f1b3ee087f5cc829c1b645f409e87345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
