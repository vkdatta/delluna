export const name="add_home";
export const id="dl_e869b8eb43b9af0f28fe";
export const url=new URL("../icons/add_home.svg?v=9d2dabfbaf2d9391bea985e56b9a00574af55b7e1641400b2bdc287b1d4b1a61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
