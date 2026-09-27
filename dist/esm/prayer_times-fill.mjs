export const name="prayer_times-fill";
export const id="dl_f949ab030dae6c18e822";
export const url=new URL("../icons/prayer_times-fill.svg?v=93019a627fb03a01627a91e3138c049137115d255b37deefd45fd4b0e6371c40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
