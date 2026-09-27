export const name="article-ny-times-light";
export const id="dl_a74f51c6add743edb968";
export const url=new URL("../icons/article-ny-times-light.svg?v=c62d4981e3c21d5dfb6a65b6ffd82477222a7f67fa73499b5dd781158d57f1fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
