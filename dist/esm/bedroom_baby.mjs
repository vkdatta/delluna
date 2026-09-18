export const name="bedroom_baby";
export const id="dl_e6c42cf45bb94fdbb35d";
export const url=new URL("../icons/bedroom_baby.svg?v=60ea3d6ecd9f6b3c79673e4749fe71ce6f3f4d0ce1c00a0398f55dbd5b6e97a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
