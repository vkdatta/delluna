export const name="image-bold";
export const id="dl_2d360984e8ef42489e17";
export const url=new URL("../icons/image-bold.svg?v=621ae47879d4916ca0e7b1601ad1eb7dc6b351af27fe4f0fceba8ef951e1b8ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
