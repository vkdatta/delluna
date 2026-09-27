export const name="pants-light";
export const id="dl_a1f7ae69fd0746879cce";
export const url=new URL("../icons/pants-light.svg?v=0ca114a63a9ab3d49d7d9fc2cdbc17fca3dd6c442b8195ac2c565f8ac8cdfc1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
