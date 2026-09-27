export const name="control-duotone";
export const id="dl_883d3143d2f94dff9754";
export const url=new URL("../icons/control-duotone.svg?v=7837723357913e9941b603a7755f48506dc1b66001c28f6d5e8d357aaa1afffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
