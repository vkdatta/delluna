export const name="bookmark_added";
export const id="dl_5786e57497e7bb4109e3";
export const url=new URL("../icons/bookmark_added.svg?v=a227856fa2e3a44ac49a9aea70de2516f0ceb54f7416d73329eb628ca096a41d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
