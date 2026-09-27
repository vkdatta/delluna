export const name="vote";
export const id="dl_a02fcd238f0048e19fa7";
export const url=new URL("../icons/vote.svg?v=4fe007556181cbbeb880cb95c27d5153e5e0fcc41128f8dd736f6dc363674996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
