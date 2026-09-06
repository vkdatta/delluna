export const name="git-pull-request-duotone";
export const id="dl_662c8819d4d04b55849a";
export const url=new URL("../icons/git-pull-request-duotone.svg?v=c0657db5bffba267378f093c2cb7aebab2c8d36ea4c54e7e03e0f6830eb7e47d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
