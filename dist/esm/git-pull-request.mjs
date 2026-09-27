export const name="git-pull-request";
export const id="dl_54a66092a2864f5a918b";
export const url=new URL("../icons/git-pull-request.svg?v=9fafb7d7013800e04081a4c87eddf663b517aad03db1b517890527b79a6ae646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
