export const name="headlights-fill";
export const id="dl_a99c87486a3a4afcbd07";
export const url=new URL("../icons/headlights-fill.svg?v=53f30d1f959c5a1e8da7a71bfb78c3c0fb4d3eaa0666232f54eb676bb1e101cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
