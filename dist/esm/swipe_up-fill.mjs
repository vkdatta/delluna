export const name="swipe_up-fill";
export const id="dl_82d92573e4f13e6b68d0";
export const url=new URL("../icons/swipe_up-fill.svg?v=23fe9647b7790d08efe7ac6f8f000228bdca7f78d4a536a180365e9d8691ae25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
