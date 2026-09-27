export const name="5k";
export const id="dl_a5ff3e51fbb9c990744f";
export const url=new URL("../icons/5k.svg?v=b7da8c13f28596f1e81401348f05c034ec88f3dee951242b60708ca9111d7526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
