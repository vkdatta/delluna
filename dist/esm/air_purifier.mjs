export const name="air_purifier";
export const id="dl_57785a72c21c42f29beb";
export const url=new URL("../icons/A/air_purifier.svg?v=fd56542af7341869751fc5902c1d64dd980dbb7cb96a5d5991d779d9cc4197fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
