export const name="bookmark_stacks-fill";
export const id="dl_76acda1bf3723de3bc86";
export const url=new URL("../icons/bookmark_stacks-fill.svg?v=4ff77827d76c5b5673bb79c84e35b84be7d8143231de645dc06cff017d61dc15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
