export const name="post";
export const id="dl_4913e0bb7b6b54191702";
export const url=new URL("../icons/post.svg?v=2358b895172365265f3c018b0afb6408c6b9238c9ea9617af1d0d8e4d7ecc447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
