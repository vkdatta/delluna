export const name="baseball-helmet-duotone";
export const id="dl_ad860f6d0be84d1da9ef";
export const url=new URL("../icons/baseball-helmet-duotone.svg?v=203b3774bdee1edcdb99132adbac6e8f9ce8388e16a68dc08e24d0993cd99d23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
