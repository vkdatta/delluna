export const name="medium-logo-bold";
export const id="dl_84cd2633174d4a4c8ee2";
export const url=new URL("../icons/medium-logo-bold.svg?v=ad06094047caa6a40a7efce3f1aeadd34eb9cc560c6cc79875562afce3127bed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
