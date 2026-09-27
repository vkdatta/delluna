export const name="hide_image";
export const id="dl_d4bc691a09afb33977ac";
export const url=new URL("../icons/hide_image.svg?v=fd138e6696c9af94e1fe7544a1c44122f64fa5ded9dbc6b27cdfe16a7931d78c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
