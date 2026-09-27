export const name="play-pause-duotone";
export const id="dl_2d293f6ddb624220bac5";
export const url=new URL("../icons/play-pause-duotone.svg?v=bdc25c88b131e16cf3493c916d3436c65199f8da0b86ed6ff249d27598db0046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
