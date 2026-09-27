export const name="devices_fold-fill";
export const id="dl_46cf9ffb62dcee5d5df6";
export const url=new URL("../icons/devices_fold-fill.svg?v=f29e93ab0e7c45df540945ec448e4aa375972a65baa34c54bca6cc40fc9a9b5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
