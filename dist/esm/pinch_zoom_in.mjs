export const name="pinch_zoom_in";
export const id="dl_bfc65733a4b554f41b6a";
export const url=new URL("../icons/pinch_zoom_in.svg?v=d47426d8f1037c9067ece183d61a651bf80fd81a707eb28b65e55c9b09150906",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
