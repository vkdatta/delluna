export const name="stylus";
export const id="dl_3afdd90dbe79a90dd84e";
export const url=new URL("../icons/stylus.svg?v=00de384a6d08e0875f719a6a555a08b53f480a9bf6de762cde5b2aa51c7a9ec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
