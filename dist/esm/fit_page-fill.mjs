export const name="fit_page-fill";
export const id="dl_072cf083957e3774da22";
export const url=new URL("../icons/fit_page-fill.svg?v=860ea30a3522b75adf01ac86bec086b460be5c9f832b3a0cb039114ab73ab6a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
