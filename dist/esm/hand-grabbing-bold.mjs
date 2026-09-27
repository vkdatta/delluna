export const name="hand-grabbing-bold";
export const id="dl_d4efea4c3da24982acbd";
export const url=new URL("../icons/hand-grabbing-bold.svg?v=4509d0857ff6cbf6cae9288bc5afa07479d2389859d2ae03e20c4253c6192e8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
