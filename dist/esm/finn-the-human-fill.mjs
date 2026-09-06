export const name="finn-the-human-fill";
export const id="dl_8f15478f866d421c9bfa";
export const url=new URL("../icons/finn-the-human-fill.svg?v=09c98221b995481a81af492e340e3d60b5f5283fb4dc298506ffdf5a030b2d39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
