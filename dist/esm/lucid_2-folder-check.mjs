export const name="lucid_2-folder-check";
export const id="dl_4c0614fda5694c56bca9";
export const url=new URL("../icons/lucid_2-folder-check.svg?v=343f34d9d355a37c595413d5c4aed9aff2ce3d8b95a5549854cd287ebdb02879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
