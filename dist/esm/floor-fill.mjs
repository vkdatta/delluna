export const name="floor-fill";
export const id="dl_2ac00a78b46c95c12597";
export const url=new URL("../icons/floor-fill.svg?v=335164a6145f55c265e7a51ff6a51999d4af14052b3e2ddaf88e8eb8f32a1464",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
