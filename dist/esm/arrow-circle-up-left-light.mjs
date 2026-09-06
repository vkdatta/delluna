export const name="arrow-circle-up-left-light";
export const id="dl_1f724077e8094225b353";
export const url=new URL("../icons/arrow-circle-up-left-light.svg?v=8dc5e212bd928b26e9a8659ee2daff496910730d1b1c580ea9eedf7e58a88377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
