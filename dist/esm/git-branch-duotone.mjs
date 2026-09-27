export const name="git-branch-duotone";
export const id="dl_4ead82490dbd4f3caf76";
export const url=new URL("../icons/git-branch-duotone.svg?v=f7dbd5e983fad8e24ccb1418acf2613b97bcd6aa41c830c085bfb3465b28ede5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
