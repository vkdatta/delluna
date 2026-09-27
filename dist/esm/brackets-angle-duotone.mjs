export const name="brackets-angle-duotone";
export const id="dl_3a810e95c3194d12a966";
export const url=new URL("../icons/brackets-angle-duotone.svg?v=3a35df93940d3372119202aee28f248c8f80c2d3300cf46bdc6c2945fdf31b89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
