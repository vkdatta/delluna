export const name="nuclear-plant-fill";
export const id="dl_3d5e5609415c4da7b532";
export const url=new URL("../icons/nuclear-plant-fill.svg?v=932b29cdc0eea7e01adac48c3dd6d3c48e87a477129bf9abe6df413ba27dc53b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
