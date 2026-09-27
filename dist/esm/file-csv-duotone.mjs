export const name="file-csv-duotone";
export const id="dl_b09e3e71558948429a97";
export const url=new URL("../icons/file-csv-duotone.svg?v=7a5126a332e3b5da39199aa0ef2c3436ca6357e7b34f128d27a7d0bd89a194b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
