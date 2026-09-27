export const name="square-dashed-mouse-pointer";
export const id="dl_d0c352d917d746bb9c38";
export const url=new URL("../icons/square-dashed-mouse-pointer.svg?v=a2113dcd6f4d5a4d4ced5e1a12ddeb4fcb71bd621beb6fa2ae734d1eca10a91a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
