export const name="featured_video";
export const id="dl_8f44d4494f0e5a28b176";
export const url=new URL("../icons/featured_video.svg?v=b3a73071f9242fe212d172776becd04b4f33962cce974bb062dcc1217c63505c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
