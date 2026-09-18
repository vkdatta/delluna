export const name="panorama_horizontal-fill";
export const id="dl_af4aff55ac14451dba3a";
export const url=new URL("../icons/P/panorama_horizontal-fill.svg?v=6d72106a467fab2838b5cf0803f8ee5b2d0477139f4c463afe2472eb5e4a8d86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
