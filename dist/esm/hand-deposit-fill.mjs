export const name="hand-deposit-fill";
export const id="dl_355c280dce7a49228af4";
export const url=new URL("../icons/hand-deposit-fill.svg?v=1cb87921a3c37f6d72ad93688e6868eb14b93726cdf9241c52015d8bd21f69a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
