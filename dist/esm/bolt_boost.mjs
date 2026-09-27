export const name="bolt_boost";
export const id="dl_d9252bb30520138f7ec9";
export const url=new URL("../icons/bolt_boost.svg?v=df6585e489489e3d3e05504fc1089e7f7211d05e4644874fc8007764ddacfeb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
