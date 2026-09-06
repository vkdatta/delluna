export const name="brackets-square-duotone";
export const id="dl_4a3fa1fcf98a49e2acc1";
export const url=new URL("../icons/brackets-square-duotone.svg?v=cd9264475f076e56b0315d5921320e83238bb13b19e2f9e3beb447e01dc5b435",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
