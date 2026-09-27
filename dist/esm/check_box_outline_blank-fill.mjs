export const name="check_box_outline_blank-fill";
export const id="dl_7b41cd168b4d1b539a96";
export const url=new URL("../icons/check_box_outline_blank-fill.svg?v=8044982e618a67696fcfe35e9fcd0316566dcad999f4e4ae90ad094e35a0c87f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
