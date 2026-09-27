export const name="picnic-table-duotone";
export const id="dl_a262535457f144ca93d7";
export const url=new URL("../icons/picnic-table-duotone.svg?v=291fbd94673dd0ee3d4041e683dc94f948a8b178999da60e167946c07d42caf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
