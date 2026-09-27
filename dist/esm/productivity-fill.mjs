export const name="productivity-fill";
export const id="dl_14a7e2286ac6e977ba0e";
export const url=new URL("../icons/productivity-fill.svg?v=c4048d5f931d415f3ee319c1c70ee8da2037e26fa6cebe8eb5cb7d43dc671be5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
