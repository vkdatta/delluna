export const name="arrow-fat-down";
export const id="dl_e738cb94a79448c2907f";
export const url=new URL("../icons/arrow-fat-down.svg?v=5a21739a68e338fe105ff6b32ee12e0fa0314d46dddca9148daa55dc0f117dc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
