export const name="account_child-fill";
export const id="dl_b59e2969b77d54c42581";
export const url=new URL("../icons/account_child-fill.svg?v=8aa3d96f60c31c9916368460d327961f93ddceb1234e2a444cdac0206bb0e914",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
