export const name="house-bold";
export const id="dl_1f88a550ef424fbaa43a";
export const url=new URL("../icons/house-bold.svg?v=0a5f0d88bc7ebe6adda1adb38d8f4c04a414630627034fc817b7c61eab679a9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
