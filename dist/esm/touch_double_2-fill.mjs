export const name="touch_double_2-fill";
export const id="dl_2cb8fdee9804e13e6616";
export const url=new URL("../icons/touch_double_2-fill.svg?v=10b5273730dfff19e058e79fc80d3657f078e1aff78dbe8ee66b5c6f0c27964a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
