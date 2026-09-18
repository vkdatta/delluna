export const name="post";
export const id="dl_3018349d9e294ad1bb6c";
export const url=new URL("../icons/P/post.svg?v=6e8644b1e8913a8a744279e6162d931d03c1faa6e1046e8c2e97318b5ed9f2db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
