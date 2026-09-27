export const name="photo_library-fill";
export const id="dl_1ba87de2839c252d82af";
export const url=new URL("../icons/photo_library-fill.svg?v=7676f38d6b76d9096fc55b5987302a776df6c384c02ddbca005ab2da5424b4e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
