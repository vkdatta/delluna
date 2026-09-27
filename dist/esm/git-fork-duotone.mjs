export const name="git-fork-duotone";
export const id="dl_d7beb6fc5c1a48a2afdd";
export const url=new URL("../icons/git-fork-duotone.svg?v=ea47361248d76c394057ddb24ccb8a9a56934a961e004799e7c23875a0dc7a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
