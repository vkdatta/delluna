export const name="featured_video-fill";
export const id="dl_6d5c54ebe27b47a080ad";
export const url=new URL("../icons/F/featured_video-fill.svg?v=5fc31fbf395658b3c750c36ecaf865e8ce9c99d68d812ae31666a4c323885436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
