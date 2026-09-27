export const name="lucid_1-circle-arrow-out-down-left";
export const id="dl_5e3dd38a560a44adb441";
export const url=new URL("../icons/lucid_1-circle-arrow-out-down-left.svg?v=8b0609c54ed5bebfa8f2991fd43e6e3d3f47b40399464da5b09d5c081ae9cfad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
