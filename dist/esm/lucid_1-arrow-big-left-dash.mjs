export const name="lucid_1-arrow-big-left-dash";
export const id="dl_c1a016b2b00340a8a78b";
export const url=new URL("../icons/lucid_1-arrow-big-left-dash.svg?v=37339dc612c68df53a9d272ff6014b8108e9c3a28160f3b71d3137e321a706e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
