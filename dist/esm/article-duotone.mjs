export const name="article-duotone";
export const id="dl_cce6728ac0dc463b82e2";
export const url=new URL("../icons/article-duotone.svg?v=eb0f4bd1be2cb2983c8a3fb9c8d4b55b9bf961fb6980cdcc3bf68a747dd83e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
