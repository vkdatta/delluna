export const name="scan-smiley-bold";
export const id="dl_2ce272f92d8843a5b6f7";
export const url=new URL("../icons/S/scan-smiley-bold.svg?v=24a004f3d9b5b7fbf178dda7bcef990d40c01cf18beb0d69d8ddb1b8d7746048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
