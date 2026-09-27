export const name="explore_off";
export const id="dl_8ed9da4d3feb7280b5f2";
export const url=new URL("../icons/explore_off.svg?v=bd702ba84495c9b7374cedeeea467def1865199ea19952f4f847b03fc8d31c3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
