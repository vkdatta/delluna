export const name="encrypted_add_circle-fill";
export const id="dl_ba3edbd541bdc8a9ea2e";
export const url=new URL("../icons/encrypted_add_circle-fill.svg?v=e8e4849c759ab6392a62bbc90d9f5604081fbcd30060cfd155f8d392029bbab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
