export const name="lifebuoy-light";
export const id="dl_5ce75da68fe242f0b13b";
export const url=new URL("../icons/lifebuoy-light.svg?v=8689576cc33b6edb09b8ffbe8149f48ea38f089fee983c765e1ccdcb0b2a854c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
