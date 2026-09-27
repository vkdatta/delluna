export const name="for_you-fill";
export const id="dl_26ca35399429da805c69";
export const url=new URL("../icons/for_you-fill.svg?v=f13a29a8179d333dacef3fdf6715c0a9e439b53c710c4d44ece508d9769d7f02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
