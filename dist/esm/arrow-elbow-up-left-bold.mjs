export const name="arrow-elbow-up-left-bold";
export const id="dl_16c68b2be6b740b2af9f";
export const url=new URL("../icons/arrow-elbow-up-left-bold.svg?v=ed848b5fe9cd63651a2d1186d4ecbc7afd15821fbcbce8d001396c6957aade77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
