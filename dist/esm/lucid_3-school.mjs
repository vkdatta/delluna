export const name="lucid_3-school";
export const id="dl_fdba5ad9a4994fffab25";
export const url=new URL("../icons/lucid_3-school.svg?v=81498c51a67313ab508e375759a2777b808d6e69b09d47627c07690a94c25fa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
