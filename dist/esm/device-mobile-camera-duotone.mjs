export const name="device-mobile-camera-duotone";
export const id="dl_2986847f2d7948ddbee8";
export const url=new URL("../icons/device-mobile-camera-duotone.svg?v=574bed529f822b8fa74ef25c55c7c4c389418bf1edd0b5f964c97cd91e3187a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
