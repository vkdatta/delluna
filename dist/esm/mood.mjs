export const name="mood";
export const id="dl_a713a2e9e4516711f0df";
export const url=new URL("../icons/mood.svg?v=08919d95c2121fde73382646e05fba9d64313c40452666cd1a3e49589702660c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
