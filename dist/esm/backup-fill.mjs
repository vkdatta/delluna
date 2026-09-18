export const name="backup-fill";
export const id="dl_7d3649d3687c4977bd10";
export const url=new URL("../icons/backup-fill.svg?v=0ec0cd3c74ddf092510a8587cd93f02712edcea5ad923c54acc414bfd4dafc92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
