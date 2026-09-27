export const name="precision_manufacturing-fill";
export const id="dl_7e12236d1c5fc6899159";
export const url=new URL("../icons/precision_manufacturing-fill.svg?v=f6c71db6541dc03fc5084f600b23cdfb56b92cbed8734581a20301905e0e05c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
