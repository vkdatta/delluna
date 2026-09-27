export const name="pause_circle";
export const id="dl_a6ec67c4e66c686ba595";
export const url=new URL("../icons/pause_circle.svg?v=52aedddd81995aacd7d1a8c46138208825c44023077a86ea58c0c8b66749f064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
