export const name="psychology_alt";
export const id="dl_3b8473543a85add60157";
export const url=new URL("../icons/psychology_alt.svg?v=6c5366b457d3154d2f1ec691fc6a32bd1493c20d33f091345f98a96bb289e545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
