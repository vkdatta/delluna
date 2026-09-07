export const name="footprints-light";
export const id="dl_d645b73b12994168a0a7";
export const url=new URL("../icons/footprints-light.svg?v=6df3bdeb357c4c97dcfd792eb6ed9d450b7fbda4f0040522d424cc891eb1ef0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
