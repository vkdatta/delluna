export const name="file-video-light";
export const id="dl_f2d3b275828d48c5a52a";
export const url=new URL("../icons/file-video-light.svg?v=5eb215b910ccbf24ec0fb2d5866a2613f92bde7e8da79f1dc6ad69141920bac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
