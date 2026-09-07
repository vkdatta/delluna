export const name="windmill-duotone";
export const id="dl_c087f610c04f41d69172";
export const url=new URL("../icons/W/windmill-duotone.svg?v=54430d1dfffd85030940ec5e79073af817ac0bbb378b17d5f7bcb1dd4b62c65a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
