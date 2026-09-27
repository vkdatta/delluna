export const name="view";
export const id="dl_ce8c287c03854bcd8c82";
export const url=new URL("../icons/view.svg?v=68fdf95fe07e824aac673af66bd5d4a7a44aa1e7eaa54335687babc1dda332f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
