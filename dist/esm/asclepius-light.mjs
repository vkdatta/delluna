export const name="asclepius-light";
export const id="dl_7646f1a2c1694a35a427";
export const url=new URL("../icons/asclepius-light.svg?v=a6d645a94b3637911e6ea5abf6efcd39eeff3f78bd8801b85d31da49ac326ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
