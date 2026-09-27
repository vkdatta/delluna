export const name="lucid_2-folder-check";
export const id="dl_4c0614fda5694c56bca9";
export const url=new URL("../icons/lucid_2-folder-check.svg?v=7aa5d62a71b537cf5350a27929a90f4aeb6118c3a241a77831b136a8088ca846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
