export const name="social_distance";
export const id="dl_f16ce241d1b041cbaad9";
export const url=new URL("../icons/S/social_distance.svg?v=6b0e4aa23e207a1a3531d5376f226bcfe4fa70858ff3d1b91e633318dbdb46a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
