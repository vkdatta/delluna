export const name="invert_colors_off-fill";
export const id="dl_e784430fa020440f8a31";
export const url=new URL("../icons/invert_colors_off-fill.svg?v=73d28120c39f730a6dbe96d629ccc9e6eca252823456a3b0c6456bbd570235c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
