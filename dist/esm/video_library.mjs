export const name="video_library";
export const id="dl_33f440c77bd69ac2f313";
export const url=new URL("../icons/video_library.svg?v=5705fb9d6399703714145ef0881687b50817630111db48a65f2223aa28fa473b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
