export const name="watch-duotone";
export const id="dl_36a90a6a4c53323f45bd";
export const url=new URL("../icons/watch-duotone.svg?v=61ac0f373f2384d9bb2b082bfb04d17ce7e2581939f979ccfc17de098f5f8bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
