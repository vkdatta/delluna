export const name="sports_esports-fill";
export const id="dl_3a81b8cb0cb5291cf9a5";
export const url=new URL("../icons/sports_esports-fill.svg?v=c31281a8a203d9575b7f0415fb7b0eb5a9102f5bfc2b0db3f3d1135581fa7fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
