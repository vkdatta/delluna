export const name="image-thin";
export const id="dl_b816f8ace9784c609c34";
export const url=new URL("../icons/image-thin.svg?v=6cd4c59df7043c593519bb259be6a5902588308cf549fe2db7aa367f5e17d723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
