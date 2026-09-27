export const name="text-t-slash-light";
export const id="dl_315bf3a27a6d4ac307ac";
export const url=new URL("../icons/text-t-slash-light.svg?v=3fa614a152cf9b287df8de9478ff35f368d13b4b8e168ec4679c19a0ff5114e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
