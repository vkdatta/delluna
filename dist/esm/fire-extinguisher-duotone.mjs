export const name="fire-extinguisher-duotone";
export const id="dl_4773996ea6dd49fe923c";
export const url=new URL("../icons/fire-extinguisher-duotone.svg?v=6cbd8b75a31dc3aa2e40a163b6013d3f7613ecbec1ae7d8657983faa70be4757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
