export const name="crop_9_16-fill";
export const id="dl_2210f7f9b63deb6f7745";
export const url=new URL("../icons/crop_9_16-fill.svg?v=c293981fa28722eb13bd10347b3dfeb248fd4e05e96b5996834c05ffafe85e28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
