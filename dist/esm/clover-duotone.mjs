export const name="clover-duotone";
export const id="dl_d75940478f8e4d6fbfb6";
export const url=new URL("../icons/clover-duotone.svg?v=c191c03ceb431ca94e746c84d0a3113a0b8af9d301823a21d8cd0e891bdcdad6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
