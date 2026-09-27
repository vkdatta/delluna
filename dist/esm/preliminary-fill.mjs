export const name="preliminary-fill";
export const id="dl_0169c12e8535b25dff54";
export const url=new URL("../icons/preliminary-fill.svg?v=fb732b7c66c2b93a60a1f560ff9af2a1c726367dd2e98c841b252df7bf9c4eb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
