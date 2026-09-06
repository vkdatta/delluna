export const name="bookmark-simple-thin";
export const id="dl_34ac80aafc834ddba0f0";
export const url=new URL("../icons/bookmark-simple-thin.svg?v=9453270116c14c2e4cdf6ba92b3ddfae1172d11242a9c83bf595a2fcdfaebc32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
