export const name="globe-hemisphere-east";
export const id="dl_84087174e9a84fda83b3";
export const url=new URL("../icons/globe-hemisphere-east.svg?v=31aca930536b1421ebba0ded986ad1b09a7c3f907fb75019aa36d4437caac276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
