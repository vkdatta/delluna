export const name="domain_add";
export const id="dl_defca474a3084db69b6a";
export const url=new URL("../icons/domain_add.svg?v=8288d8fc8c6925501ee4effedca14af3bf44d244b12c252a2d7b710a27b557f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
