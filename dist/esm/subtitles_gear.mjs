export const name="subtitles_gear";
export const id="dl_8ab903b7ce318b19d58d";
export const url=new URL("../icons/subtitles_gear.svg?v=323d85adc5891bd9a112cdb2e354a7bf5f7b0add9005513c70f5cdf5d4579b05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
