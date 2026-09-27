export const name="nest_heat_link_e-fill";
export const id="dl_34f172119c87d234e638";
export const url=new URL("../icons/nest_heat_link_e-fill.svg?v=4d3ef032d92b6bdde1f5a412bbf729a8b960b36631b9a5ed42d5c51fb67ec328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
