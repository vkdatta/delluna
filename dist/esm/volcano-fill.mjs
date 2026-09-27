export const name="volcano-fill";
export const id="dl_92e72d87cce9cc647dd6";
export const url=new URL("../icons/volcano-fill.svg?v=61cb3ff36ae5343601d5fcd592ae13956f90ac8d73a0f9f1b798f4c4fa1f1e06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
