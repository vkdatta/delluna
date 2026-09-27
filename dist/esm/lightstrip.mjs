export const name="lightstrip";
export const id="dl_92d66f7745d024a9044c";
export const url=new URL("../icons/lightstrip.svg?v=03a06100ae41af9ff97b0dd15711e877f59d3b999530b8dfdac6f1886bd5ff80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
