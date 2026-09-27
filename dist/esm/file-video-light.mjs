export const name="file-video-light";
export const id="dl_f2d3b275828d48c5a52a";
export const url=new URL("../icons/file-video-light.svg?v=b3a89ce194d9da50c644f35977205cdb34e0266799313f9af94c73fdfe808f9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
