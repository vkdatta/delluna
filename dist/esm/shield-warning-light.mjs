export const name="shield-warning-light";
export const id="dl_26d63f60dc0ee0db44d0";
export const url=new URL("../icons/shield-warning-light.svg?v=f122db97b17576e79dd0fa454e0853d031192a9c5e200f214558df72ed26efb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
