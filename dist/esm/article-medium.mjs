export const name="article-medium";
export const id="dl_5779a6bdd06d4e8faa24";
export const url=new URL("../icons/article-medium.svg?v=7c99dedb5b66377c28c5843dbba410693a01582e34c604f690dd205c81e250f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
