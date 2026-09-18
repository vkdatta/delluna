export const name="hangout_video";
export const id="dl_681ebfdd275c43b0ae8e";
export const url=new URL("../icons/H/hangout_video.svg?v=cab2d67eaf7287d98c68e88b4bf84e00fb473dbd60b2132a79672505b0ebd29d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
