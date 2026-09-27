export const name="panorama_photosphere";
export const id="dl_4efff0e8e08683e9d313";
export const url=new URL("../icons/panorama_photosphere.svg?v=c14cec8ad08b98951d745754601be08375ac7ce84c9d0692e78cd3ebe9678420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
