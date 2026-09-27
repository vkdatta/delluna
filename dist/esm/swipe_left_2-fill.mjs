export const name="swipe_left_2-fill";
export const id="dl_f9ca36a43fd124d8c8a8";
export const url=new URL("../icons/swipe_left_2-fill.svg?v=49f762fca01c4a1875361f8e904a54944c7a3c4b5c3b3997bdec3889e67e0b47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
