export const name="hand-swipe-left-fill";
export const id="dl_2a5b6e090883459e9c05";
export const url=new URL("../icons/hand-swipe-left-fill.svg?v=4cedc8a291294a6748d0b6cf13f8a994992d7bad1c454155b1f474422b40ec69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
