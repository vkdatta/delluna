export const name="dangerous-fill";
export const id="dl_2935c96bac994455b283";
export const url=new URL("../icons/D/dangerous-fill.svg?v=65e07a1ebab801b72985768bdc06205cda1143b2830d67bfd77b8e6bcea734d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
