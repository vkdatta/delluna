export const name="bookmark_remove-fill";
export const id="dl_bd161c8623e9558a9e04";
export const url=new URL("../icons/bookmark_remove-fill.svg?v=91abe81a9d507c7d3936b0e370db43703ba8a3dc0f70ed6929db0a3bcb378ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
