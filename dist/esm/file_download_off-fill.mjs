export const name="file_download_off-fill";
export const id="dl_c35e339b0911393a0e66";
export const url=new URL("../icons/file_download_off-fill.svg?v=d4ee34f3641ef1faf0cfd6c1d2d06202b173cd7705c2e554ad43b2e4589dc7ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
