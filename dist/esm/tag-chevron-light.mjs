export const name="tag-chevron-light";
export const id="dl_6b05770b2e7c40c59fcd";
export const url=new URL("../icons/T/tag-chevron-light.svg?v=275b40413f6fe060d21f769a0b0fcf00306523a3d9ae00e6b9fab5e21b490ab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
