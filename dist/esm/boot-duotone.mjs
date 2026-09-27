export const name="boot-duotone";
export const id="dl_c0fccfb14b7b4573babb";
export const url=new URL("../icons/boot-duotone.svg?v=91d8656719353de23a64cfe689530e65baa4578508d1105738d271e0a27b135f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
