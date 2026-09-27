export const name="snapchat-logo-bold";
export const id="dl_1dc3e8dc4efe5261ab03";
export const url=new URL("../icons/snapchat-logo-bold.svg?v=b8e045e1396f046462123b2eef1317bb60be5d0f721b2e926e530b2a078400b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
