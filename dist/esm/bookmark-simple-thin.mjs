export const name="bookmark-simple-thin";
export const id="dl_34ac80aafc834ddba0f0";
export const url=new URL("../icons/bookmark-simple-thin.svg?v=3da4d1f2ebedda00c1642ee3e867e7fa9e9586d84e6e272501beb449cea6fa13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
