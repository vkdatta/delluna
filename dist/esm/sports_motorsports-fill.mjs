export const name="sports_motorsports-fill";
export const id="dl_b0f2a1d9ab90433f9229";
export const url=new URL("../icons/sports_motorsports-fill.svg?v=d873e80c69f3d34a91f402e699cfabbebba73b2b39a52cb1876109fe33c5f214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
