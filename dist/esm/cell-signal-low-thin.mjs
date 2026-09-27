export const name="cell-signal-low-thin";
export const id="dl_ea28989a1e774cc68643";
export const url=new URL("../icons/cell-signal-low-thin.svg?v=390401a6f12f96223aa8c63f2b3426eeda069bd10d931947975d40b18d7e6aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
