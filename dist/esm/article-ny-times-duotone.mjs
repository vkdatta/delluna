export const name="article-ny-times-duotone";
export const id="dl_d9e238c14dbf46a59a0b";
export const url=new URL("../icons/article-ny-times-duotone.svg?v=b529e17c87c15e6ad08c43da27ec870b1b751c48f394ebefaf78376a03aa8f42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
