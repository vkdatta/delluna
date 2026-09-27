export const name="house-simple-fill";
export const id="dl_898991284aa24351b4b2";
export const url=new URL("../icons/house-simple-fill.svg?v=be3194604054448fe806c374fe3c194f8337688fdbaaf590b27b75b2403c5b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
