export const name="lucid_1-arrow-big-up";
export const id="dl_8b4d2ec492f74488bd51";
export const url=new URL("../icons/lucid_1-arrow-big-up.svg?v=11d0845a3576f8c520b39c255451dd79df585145a9eb569be96d2331108c2807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
