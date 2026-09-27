export const name="soundcloud-logo";
export const id="dl_ab405c8659989081b83b";
export const url=new URL("../icons/soundcloud-logo.svg?v=0e9f12e83dfc8bba1a4538c9e99d4cc555048a8a507a6fd71d86127a465317fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
