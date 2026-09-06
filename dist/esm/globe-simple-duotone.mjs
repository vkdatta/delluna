export const name="globe-simple-duotone";
export const id="dl_ee626cbba80b494a8e47";
export const url=new URL("../icons/globe-simple-duotone.svg?v=cb819dad220c5aea017fb6c41b159d9ff99bc08bb4af951528a90423d0ef2d8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
