export const name="arrow-bend-right-down-duotone";
export const id="dl_868319f42dba424d963e";
export const url=new URL("../icons/arrow-bend-right-down-duotone.svg?v=332eec672a3a678fc6f105ad06c307eb6c673918e48802324933b060370e8f0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
