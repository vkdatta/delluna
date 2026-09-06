export const name="blueprint-fill";
export const id="dl_cf5824dc171849c1a555";
export const url=new URL("../icons/blueprint-fill.svg?v=40b76f28f95cd74c31130779f3d9a142d7b26be3087c907b6038ca1ebd40a5c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
