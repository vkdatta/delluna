export const name="dots-six-vertical-thin";
export const id="dl_429a9ecdde024889b6f1";
export const url=new URL("../icons/dots-six-vertical-thin.svg?v=368a2776422d18544daf9afef584a6d4a8269bc7c6fa9e59b49926090dadc058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
