export const name="capsule";
export const id="dl_c276af4491d54969b79c";
export const url=new URL("../icons/capsule.svg?v=2324b6596a69f1dde455ce938814415ada335b9526c702c7b95103bce3253ee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
