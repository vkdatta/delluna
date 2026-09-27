export const name="touch_triple";
export const id="dl_d3a208cb6ddc67db289e";
export const url=new URL("../icons/touch_triple.svg?v=1e462311799bf580a7269a9725fdbff56eb74fe8159de7ee59e6df14c7463854",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
