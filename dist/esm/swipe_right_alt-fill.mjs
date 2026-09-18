export const name="swipe_right_alt-fill";
export const id="dl_94f8870377be4c5a82f4";
export const url=new URL("../icons/S/swipe_right_alt-fill.svg?v=92c12ff5f23b96136634f7739e6248fe3a5c79a5cf7724d87fac49743ecf439f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
