export const name="local_post_office-fill";
export const id="dl_e4bbae6c5cb32b29caee";
export const url=new URL("../icons/local_post_office-fill.svg?v=3cc48be510f19fd504d26d3d9d368a26d299b5745155d086012eb92b4531892f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
