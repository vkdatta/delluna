export const name="shield-star-bold";
export const id="dl_c3155f56e27b5f893c63";
export const url=new URL("../icons/shield-star-bold.svg?v=d7d9a8d7738341f328202fb6494c5b728efd701bba7218b9c5e720b378701784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
