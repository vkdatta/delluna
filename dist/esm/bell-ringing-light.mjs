export const name="bell-ringing-light";
export const id="dl_83c55328fa2248a7892d";
export const url=new URL("../icons/bell-ringing-light.svg?v=14f6599766d9c0b375c5dd1b2e4984a4b43379d66cdf81f7725efef720af93d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
