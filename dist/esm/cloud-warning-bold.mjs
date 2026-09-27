export const name="cloud-warning-bold";
export const id="dl_55737ab971d442d9ae7c";
export const url=new URL("../icons/cloud-warning-bold.svg?v=8046f59a040bedeadd57f42367c93d20e6869b022a467711139c2ef832b9eafb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
