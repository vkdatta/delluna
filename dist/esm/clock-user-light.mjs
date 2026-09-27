export const name="clock-user-light";
export const id="dl_0447629c2f264a64bb92";
export const url=new URL("../icons/clock-user-light.svg?v=62bc5c204f4df7da30ab5a63ab103ddd1e39227d3907afe59bb216e70c983ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
