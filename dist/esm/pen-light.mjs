export const name="pen-light";
export const id="dl_f666ca0fa3324227ad96";
export const url=new URL("../icons/pen-light.svg?v=c8bc262025e39719fc128c2af04ad8ce484db9ffb6885fab0597a80b1d6aaa44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
