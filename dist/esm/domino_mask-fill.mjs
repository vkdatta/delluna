export const name="domino_mask-fill";
export const id="dl_117fdd72f71c5cdf5d40";
export const url=new URL("../icons/domino_mask-fill.svg?v=fbbc11d9b7bdee9fd93cbc94e633d0a5c5047f7dda8c909c8ce7777e752cd178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
