export const name="home_max_dots-fill";
export const id="dl_e8e52d44e76fd9cd0935";
export const url=new URL("../icons/home_max_dots-fill.svg?v=09cbae521753f50f361fd0965b0e756c195e3e6d0a9372354fe2371506ebeb16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
