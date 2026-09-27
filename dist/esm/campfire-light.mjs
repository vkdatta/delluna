export const name="campfire-light";
export const id="dl_bcf6ba04f9af430089a6";
export const url=new URL("../icons/campfire-light.svg?v=3e62620dbe31f07b59f42ecf199acb89d2f553a73686f82d2e54a88e6f06c5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
