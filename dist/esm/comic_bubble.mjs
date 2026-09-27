export const name="comic_bubble";
export const id="dl_2e3880769938e78f834b";
export const url=new URL("../icons/comic_bubble.svg?v=8f7922bf3f405491522b2dccb13e15b41d5e821febc37484cf68d381f8be46c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
