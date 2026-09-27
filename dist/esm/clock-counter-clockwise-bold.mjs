export const name="clock-counter-clockwise-bold";
export const id="dl_c9fa4409abb2421c838a";
export const url=new URL("../icons/clock-counter-clockwise-bold.svg?v=3fbd951845ead2dc6907a1b9eadec0d79f1829666a9ef13250698c65e99c5e96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
