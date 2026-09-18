export const name="pin_drop-fill";
export const id="dl_84bb74d743a44008ba49";
export const url=new URL("../icons/pin_drop-fill.svg?v=177b76cbec0cd56abb382b18473c8e86e3bc5ad8c73b287d8868da51b6821260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
