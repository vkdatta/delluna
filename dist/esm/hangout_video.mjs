export const name="hangout_video";
export const id="dl_1f62e0927ca0772f6fa4";
export const url=new URL("../icons/hangout_video.svg?v=c4a165ea94324a233560b7d95bbf8620c347229ecf98d71d2e4aede949f30021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
