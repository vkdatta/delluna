export const name="brightness_1";
export const id="dl_8bb87d6e9f3bc10d0521";
export const url=new URL("../icons/brightness_1.svg?v=d09e00da9308182b2ac083255886c8e267a594dd82b238881c6299848421bbbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
