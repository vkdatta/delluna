export const name="file_open-fill";
export const id="dl_9949df746759e3feda51";
export const url=new URL("../icons/file_open-fill.svg?v=ffc75e38bf96e85786f92d567fdfba2b7441e04c3a11c6375879d6f9a7721b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
