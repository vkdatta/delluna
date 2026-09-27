export const name="export-light";
export const id="dl_b3a543f22fe54263b727";
export const url=new URL("../icons/export-light.svg?v=aa182b699c10dd9dc35b9d699b6448872c609926665ea2ebcabc9b9234a5cf77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
