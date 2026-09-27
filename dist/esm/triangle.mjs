export const name="triangle";
export const id="dl_089004979c8849ad90b9";
export const url=new URL("../icons/triangle.svg?v=d7b2376031369402b2e5d54f4688bd7745ab2e5cf09e520a97dadda1e1fe36cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
