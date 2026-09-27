export const name="build-fill";
export const id="dl_3d7fbbdb34d2be6035c7";
export const url=new URL("../icons/build-fill.svg?v=ed9c70682932c33c44fdac084009489e7f7de625ca114cefc36d586d8f98d051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
