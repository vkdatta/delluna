export const name="paragraph-bold";
export const id="dl_526652a6fe554c67bcf2";
export const url=new URL("../icons/paragraph-bold.svg?v=67fae65b10477b4462ad91da46a76aabcfd3f32f88990ee3d90aa4613cb5d3c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
