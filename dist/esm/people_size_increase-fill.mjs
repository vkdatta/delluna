export const name="people_size_increase-fill";
export const id="dl_83cf82b797c27cad5762";
export const url=new URL("../icons/people_size_increase-fill.svg?v=b650cd299705c9eed1c3d73eb60e446344edbfbf491c96b4826dff15ca98d230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
