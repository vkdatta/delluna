export const name="spotify-logo-light";
export const id="dl_da4f75241dd14bb80a13";
export const url=new URL("../icons/spotify-logo-light.svg?v=9c3b33b1858fbeffc83440bc328c401b2f366f8865c51468ac988387db55c3e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
