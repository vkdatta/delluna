export const name="lucid_2-heading-4";
export const id="dl_a2a51c0ba44046bb9cca";
export const url=new URL("../icons/lucid_2-heading-4.svg?v=ae6cf321abb47715258921cb7eea97f9cd30266cf0583c8054d9d92685c108c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
