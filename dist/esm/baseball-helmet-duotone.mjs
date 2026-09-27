export const name="baseball-helmet-duotone";
export const id="dl_ad860f6d0be84d1da9ef";
export const url=new URL("../icons/baseball-helmet-duotone.svg?v=802a022cbf18e953104b1bf2d2829308f1b280a0082a9963f32befc849151c8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
