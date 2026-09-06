export const name="pulse";
export const id="dl_0b7b1a73c5c445d58214";
export const url=new URL("../icons/pulse.svg?v=9c1cc6fc4b2cd292b798294f8759c9e146b41cc5606357532fe200dd07b1323b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
