export const name="shield_radar";
export const id="dl_408b86eb7dce842227db";
export const url=new URL("../icons/shield_radar.svg?v=521c573547135e112d77d0c9769d95ae1cd2d9aa9436525baeb9a5dcf7816e23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
