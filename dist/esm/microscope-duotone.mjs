export const name="microscope-duotone";
export const id="dl_258774127ed648c5bc10";
export const url=new URL("../icons/microscope-duotone.svg?v=af19f13eebcb69e6c74b7f422fda33882cd813b2375eea716a7428b37ea15e1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
