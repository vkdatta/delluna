export const name="front_loader-fill";
export const id="dl_acd4af9453f64d7aa38a";
export const url=new URL("../icons/F/front_loader-fill.svg?v=6ba5f6e7065af785389ca709d7c0dc2bbff758fd0d99070268390d14e1713e37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
