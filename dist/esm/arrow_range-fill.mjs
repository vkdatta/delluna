export const name="arrow_range-fill";
export const id="dl_d8f276e30528a4a09034";
export const url=new URL("../icons/arrow_range-fill.svg?v=ff2566c6d79b0f78c16f7b843beca04cb8daee99f68608fa95fca36e3b5b9687",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
