export const name="line-vertical-light";
export const id="dl_7f67900a67b045a2a5f3";
export const url=new URL("../icons/line-vertical-light.svg?v=2a3f2da013e09f235e70ee47ea2639b2c27bb24afe72fba63246ba374764a00d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
