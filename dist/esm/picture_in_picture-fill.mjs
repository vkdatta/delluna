export const name="picture_in_picture-fill";
export const id="dl_b7e64118945d4f358ace";
export const url=new URL("../icons/P/picture_in_picture-fill.svg?v=00475a424191571c10f6cf63f6e79e09ecc6cad11fe38c24a64a685e916bb466",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
