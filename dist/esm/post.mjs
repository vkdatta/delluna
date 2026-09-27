export const name="post";
export const id="dl_360d02a9c4d5494d85e0";
export const url=new URL("../icons/post.svg?v=5fe192a66a5313e0c353347ac91deaa2e3d7016a716d8f6140c68b06ea8624e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
