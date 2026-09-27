export const name="workspace_premium";
export const id="dl_3042e7028f9d13399b97";
export const url=new URL("../icons/workspace_premium.svg?v=bf8362856f2d7d3fafeed5bcbe31788b2e8d1ff51d8e17e9777b6efcf1681a42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
