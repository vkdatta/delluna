export const name="fullscreen_portrait-fill";
export const id="dl_be7a3c65027befa85543";
export const url=new URL("../icons/fullscreen_portrait-fill.svg?v=f43a99e4a33b3e565cabc5ec2781f4fa2d76223855e110f5aaaf044f26edc6e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
