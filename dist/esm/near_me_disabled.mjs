export const name="near_me_disabled";
export const id="dl_51f3e862c63d6fd19424";
export const url=new URL("../icons/near_me_disabled.svg?v=99b7ac3649123a825540200f33253f6223742d10127bad378ac97c1bdb520691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
