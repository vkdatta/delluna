export const name="density_medium-fill";
export const id="dl_796ace94a274aa0c83da";
export const url=new URL("../icons/density_medium-fill.svg?v=4b0db2c3732f7acdbdd2f12fa4765903eafc45d3b8e42264de19947b003d4c06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
