export const name="brandy-light";
export const id="dl_471320c1f94445a6ad03";
export const url=new URL("../icons/brandy-light.svg?v=2b1c49dbef7939c3b8dc5f029960e3019ba4fb3d342a3155ab8f67682a71d151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
