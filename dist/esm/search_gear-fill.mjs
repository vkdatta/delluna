export const name="search_gear-fill";
export const id="dl_e666f996ce624ddd2ded";
export const url=new URL("../icons/search_gear-fill.svg?v=e5c60cd1fc1ef7154deb49e372e5d4a1a0ab6d1acfbca8290b8cf8cc009b8250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
