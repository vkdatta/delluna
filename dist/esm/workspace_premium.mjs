export const name="workspace_premium";
export const id="dl_10399f65915f84900aec";
export const url=new URL("../icons/workspace_premium.svg?v=864c9eae6e4b93e7c697d4d3dbec21e76ad63a6e2ffec9c2fce1a70a39461db9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
