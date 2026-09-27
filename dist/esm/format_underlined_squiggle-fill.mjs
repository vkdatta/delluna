export const name="format_underlined_squiggle-fill";
export const id="dl_c9072ea98b509c6abf4e";
export const url=new URL("../icons/format_underlined_squiggle-fill.svg?v=7760bf579a99ce15e280fe53c984516db003e5c3edb641135220ee57085aa26d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
