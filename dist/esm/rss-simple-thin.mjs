export const name="rss-simple-thin";
export const id="dl_36387a47970c449a80d0";
export const url=new URL("../icons/rss-simple-thin.svg?v=0298d43861ce68c50791f33e4d5d1f635ddb37ece923166015836557177fa9b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
