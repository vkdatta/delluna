export const name="dot-light";
export const id="dl_f7fd87d9ec4244a085ac";
export const url=new URL("../icons/dot-light.svg?v=b3919f6eb322437775e5226032344dd9c0fcf589c6d2d5044c4c61600c7d5d13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
