export const name="print_add";
export const id="dl_9cd0c4e1a4e34e81ace9";
export const url=new URL("../icons/print_add.svg?v=08a9902e06195c78e200fed29f232768541112b660dcda5ccc3ad6407a65b018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
