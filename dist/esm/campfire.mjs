export const name="campfire";
export const id="dl_0df18f6050934da5b4a1";
export const url=new URL("../icons/campfire.svg?v=08245aeb5b078c91b77167dc82e74456cb5e9af4c56e7c69abb29174f815eac5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
