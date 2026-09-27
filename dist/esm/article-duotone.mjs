export const name="article-duotone";
export const id="dl_cce6728ac0dc463b82e2";
export const url=new URL("../icons/article-duotone.svg?v=dce541fba663b3e14ececaf25f49ec3bcf9513b649c58d0e9a64975aa4b3561c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
