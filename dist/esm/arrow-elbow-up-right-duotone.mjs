export const name="arrow-elbow-up-right-duotone";
export const id="dl_4a0e2d4bf3374efe9cb5";
export const url=new URL("../icons/arrow-elbow-up-right-duotone.svg?v=09b41b5539c0992c1b1e0a47fc9579a5633841d544db92cdd02205ef4c639140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
