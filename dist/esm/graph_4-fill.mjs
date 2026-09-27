export const name="graph_4-fill";
export const id="dl_05344f64200ffb57588e";
export const url=new URL("../icons/graph_4-fill.svg?v=ff99b3b5055ff4d19a98a25dd26bfa71bd9590e6e47b1d4f84fcc715b8ea49ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
