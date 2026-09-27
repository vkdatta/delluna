export const name="git-branch";
export const id="dl_226f38bf82c841a8b4cd";
export const url=new URL("../icons/git-branch.svg?v=804e9540cba8682c13d7b93a087d0bec9bab5a97258af0f0823019c514fd6722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
