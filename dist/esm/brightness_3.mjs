export const name="brightness_3";
export const id="dl_d71b76cd71614851d10f";
export const url=new URL("../icons/brightness_3.svg?v=0eaf0a6aab6eb3322ae006209cbabc80aad913429f8e5ce26aa8c61f0de1a247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
