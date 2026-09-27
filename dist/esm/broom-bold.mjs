export const name="broom-bold";
export const id="dl_330b1c30e5464c1caeb2";
export const url=new URL("../icons/broom-bold.svg?v=3a1aa22b9c60b5449503efd14f61aa01c79ae42ac2b72b5e523936e6654ba0cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
