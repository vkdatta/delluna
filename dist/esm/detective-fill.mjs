export const name="detective-fill";
export const id="dl_d8de674b6c9d47a2af8f";
export const url=new URL("../icons/detective-fill.svg?v=3fa1c3a12694ca41452db4cde5a3bdb0c1059b582c26cbed0f6eaaba1b3551bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
