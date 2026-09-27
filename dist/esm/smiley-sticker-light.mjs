export const name="smiley-sticker-light";
export const id="dl_17cae5d4596467b7e404";
export const url=new URL("../icons/smiley-sticker-light.svg?v=faf0fa109fff40680d18d9a235ad7d728102824b5280b4cb14884b1c39961413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
