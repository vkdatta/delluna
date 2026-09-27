export const name="arming_countdown-fill";
export const id="dl_13196b387d3f82db10ab";
export const url=new URL("../icons/arming_countdown-fill.svg?v=ebf05680eed2c6e7bf6b52373c8bd067c93fc77f298060f1f46f684bebabe894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
