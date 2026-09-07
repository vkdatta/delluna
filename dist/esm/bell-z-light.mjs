export const name="bell-z-light";
export const id="dl_673f70a01a0544198417";
export const url=new URL("../icons/bell-z-light.svg?v=240e471af653e1ba50958ac81eb0b2abdd04492e227da61f794b2b946beed7a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
