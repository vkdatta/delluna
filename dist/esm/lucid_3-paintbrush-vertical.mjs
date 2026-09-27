export const name="lucid_3-paintbrush-vertical";
export const id="dl_0b28e2804ecd4559a8d1";
export const url=new URL("../icons/lucid_3-paintbrush-vertical.svg?v=3c1a0fb06b2b940520c98fb95e6d51f9499a753424e4f271da25e48c39111e61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
