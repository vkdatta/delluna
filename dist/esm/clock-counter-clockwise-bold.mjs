export const name="clock-counter-clockwise-bold";
export const id="dl_c9fa4409abb2421c838a";
export const url=new URL("../icons/clock-counter-clockwise-bold.svg?v=3f1940e75adc14a48d4e60a8d69dc81817630eb26c7a4c15a31dee07c832d5b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
