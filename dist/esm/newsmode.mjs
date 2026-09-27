export const name="newsmode";
export const id="dl_c00a74468f806ee8e6c7";
export const url=new URL("../icons/newsmode.svg?v=2dfd69ca190115a3f6edad63252202343047eecf48fd2a45f61dc91aaef33fca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
