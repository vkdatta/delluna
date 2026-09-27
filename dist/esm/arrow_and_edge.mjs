export const name="arrow_and_edge";
export const id="dl_fb95a4c0ec4f5428fa50";
export const url=new URL("../icons/arrow_and_edge.svg?v=bb388375dc99876f038a60670f1e9b398f6bba4f50ebc4d2408a382fa304d313",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
