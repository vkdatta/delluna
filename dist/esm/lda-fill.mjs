export const name="lda-fill";
export const id="dl_6abb948198a2b0b0c3c4";
export const url=new URL("../icons/lda-fill.svg?v=a20d37ec96c188cf3f9526fe9654c0dfea4327a46e5341d8b4b5fd511663b48c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
