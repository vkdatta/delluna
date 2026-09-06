export const name="folder-dashed-light";
export const id="dl_c47422244e8b4807a0bb";
export const url=new URL("../icons/folder-dashed-light.svg?v=dc3db3759d9c48b7b12aed460f641339873a2f2f1619c41c61534815ee65e066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
