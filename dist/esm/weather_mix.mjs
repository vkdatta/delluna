export const name="weather_mix";
export const id="dl_139cdcf2266a7856c808";
export const url=new URL("../icons/weather_mix.svg?v=51daa7e478ef9b9979f855626cd3b82efe527b3373c116d0114034a3702e7f38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
