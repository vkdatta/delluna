export const name="enterprise";
export const id="dl_6e41ca34cf2dc5b67760";
export const url=new URL("../icons/enterprise.svg?v=7585eb8949b4804e1a038a5d16c7f047c20ba63a74397c88be89f1041a4607a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
