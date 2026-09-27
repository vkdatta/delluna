export const name="add-fill";
export const id="dl_e6a2418e8ed346629c96";
export const url=new URL("../icons/add-fill.svg?v=344ed4d60da81d3097a63a3a7f3ef0058bf2c4e82dc45b6c0a6aaffc6b30573e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
