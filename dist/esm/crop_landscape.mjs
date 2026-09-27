export const name="crop_landscape";
export const id="dl_03c637a68b50f5bb693b";
export const url=new URL("../icons/crop_landscape.svg?v=728ef941a3f93c54b51bc9117f4f5b666172f73d3ee9e00f073d1a5b4c7f2427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
