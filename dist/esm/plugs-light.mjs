export const name="plugs-light";
export const id="dl_3829e40911184ab3b12a";
export const url=new URL("../icons/plugs-light.svg?v=38d735ec210938bb4ae3d2000e47e9f88e9e1c3e856eb05b2ee1f39a68a4a7e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
