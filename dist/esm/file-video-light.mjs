export const name="file-video-light";
export const id="dl_f2d3b275828d48c5a52a";
export const url=new URL("../icons/file-video-light.svg?v=9731e5d85526a0efc237e1b2345ce2f2d4c7097b76269ca30b593e9dc815595f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
