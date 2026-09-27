export const name="bookmark_check";
export const id="dl_2b6c8c928008a7bf8d29";
export const url=new URL("../icons/bookmark_check.svg?v=c8a6bad2fd79e49739cf9c5944e29cce1b15139fddd20af1d0bf539fb27b1c54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
