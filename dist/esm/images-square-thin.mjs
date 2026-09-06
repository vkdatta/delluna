export const name="images-square-thin";
export const id="dl_327b279d48e541cd8ff7";
export const url=new URL("../icons/images-square-thin.svg?v=a60f13257792058ba3bbd7401d710b85b86c32b563563be8cd07a9ffff7df17c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
