export const name="globe-thin";
export const id="dl_92fb137f893f41369dd2";
export const url=new URL("../icons/globe-thin.svg?v=475ee90dc6e5cc20555ea9748c7842cbffcbc75201d8c3b9aac5ac84fed0bd68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
