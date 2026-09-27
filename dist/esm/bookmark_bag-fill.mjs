export const name="bookmark_bag-fill";
export const id="dl_36f029f874e5a5634928";
export const url=new URL("../icons/bookmark_bag-fill.svg?v=695eac2492181ac724d0231ea51eb1baaf6d230618a46bafea52f504fefc553d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
