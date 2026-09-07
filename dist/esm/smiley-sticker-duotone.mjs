export const name="smiley-sticker-duotone";
export const id="dl_fde177ce109d49ac9987";
export const url=new URL("../icons/S/smiley-sticker-duotone.svg?v=a0811f9f59ca32e5ec23380c899e0a7e20e6de7a60f93d4af48f5750c4b86343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
