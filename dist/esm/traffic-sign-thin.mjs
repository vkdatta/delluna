export const name="traffic-sign-thin";
export const id="dl_158a8570b3d35f6df37a";
export const url=new URL("../icons/traffic-sign-thin.svg?v=631524acdcebffecb781eab1e7018cccc27ccaac0f4d125f8938affff89959f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
