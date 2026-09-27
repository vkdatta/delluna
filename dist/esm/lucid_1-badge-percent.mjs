export const name="lucid_1-badge-percent";
export const id="dl_8020aa52a30947cda08e";
export const url=new URL("../icons/lucid_1-badge-percent.svg?v=4c32907e05c49e858be3de7d7177e2896b0bbf80f5361a3ffc184551080db83f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
