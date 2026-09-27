export const name="sync_saved_locally-fill";
export const id="dl_edc09955f57283adbce6";
export const url=new URL("../icons/sync_saved_locally-fill.svg?v=cd863daced4e0f6d904cecba0314a414522338ff02ba2598c1d61ff26f4b1434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
