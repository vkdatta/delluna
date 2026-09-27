export const name="ping-pong-light";
export const id="dl_5532f90e47dc486bad2b";
export const url=new URL("../icons/ping-pong-light.svg?v=fed04f15112b24878335063fec3bf9e0bf3924ad5ca05b4c752754466f6b37cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
