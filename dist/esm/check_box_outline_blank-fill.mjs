export const name="check_box_outline_blank-fill";
export const id="dl_e42331ed825fe900b458";
export const url=new URL("../icons/check_box_outline_blank-fill.svg?v=c6c20f17bc0b87d0c09d8ef8073726ddd81ec0044bd4e7780cc071820e303975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
