export const name="trend-up-light";
export const id="dl_0a404802105e33ea52c3";
export const url=new URL("../icons/trend-up-light.svg?v=1526678f12f1b8cac4c0f83cf2751030b4edd84771c8ee4563d0d55c533e9054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
