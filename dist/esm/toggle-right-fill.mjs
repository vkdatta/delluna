export const name="toggle-right-fill";
export const id="dl_be4be85a934f825302cd";
export const url=new URL("../icons/toggle-right-fill.svg?v=62c9f0f3d391d8a064b04b497d080254d96162d4c0356aba2e68e15556e54861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
