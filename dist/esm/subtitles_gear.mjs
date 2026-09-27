export const name="subtitles_gear";
export const id="dl_367fa2a473c8082adde7";
export const url=new URL("../icons/subtitles_gear.svg?v=82bdc160ef4e1daffa3c176253dd1e6186efa4372c3b07b429e65b8ee8f4e236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
