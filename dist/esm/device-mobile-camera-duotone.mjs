export const name="device-mobile-camera-duotone";
export const id="dl_2986847f2d7948ddbee8";
export const url=new URL("../icons/device-mobile-camera-duotone.svg?v=25705f231be99b9f47558c987cbd3d3ab145995781f73a45ba09ba7eeaa1e163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
