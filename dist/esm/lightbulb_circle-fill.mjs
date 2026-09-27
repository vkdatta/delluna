export const name="lightbulb_circle-fill";
export const id="dl_13a5e887b30d56a80536";
export const url=new URL("../icons/lightbulb_circle-fill.svg?v=ebf573a9689ea3f8ab95b635c8c7d3e900ee569bf7d1603b12057d289c062bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
