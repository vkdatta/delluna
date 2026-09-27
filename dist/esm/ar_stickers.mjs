export const name="ar_stickers";
export const id="dl_64c6306e6fd8bc83b0a6";
export const url=new URL("../icons/ar_stickers.svg?v=8ca6547174f4ce8dfc5215782a20e0bfff9f97628e0f81f4c1a4f1d94ab37ffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
