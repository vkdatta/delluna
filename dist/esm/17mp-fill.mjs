export const name="17mp-fill";
export const id="dl_5153b8754698aca5704d";
export const url=new URL("../icons/17mp-fill.svg?v=35d3d22d7d52a22d54a18a3e69c7ac1fb232c028d00069cdfb57bafb8d26b8a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
