export const name="lucid_3-shirt";
export const id="dl_e877aaa23e824a25ba3a";
export const url=new URL("../icons/lucid_3-shirt.svg?v=70864f8c66178fd8f66da5c2630c5998d3c3beba66b5551e778f89dd52801797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
