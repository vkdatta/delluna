export const name="image_arrow_up-fill";
export const id="dl_3d31df53ceb6bd50797c";
export const url=new URL("../icons/image_arrow_up-fill.svg?v=7daf2425c2eaa5c9da21e7b1a26c2bb62e975d5a0cc968a88f7f4e0823e2bb64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
