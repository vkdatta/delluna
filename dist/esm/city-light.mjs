export const name="city-light";
export const id="dl_bfe80883bf0b4e158cef";
export const url=new URL("../icons/city-light.svg?v=202121ba4fc5aa566f73c4f151d43f247e157a3657ae3dc1d7d9d7a66b36929c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
