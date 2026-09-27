export const name="tag-simple-thin";
export const id="dl_fddf0786f139fce28ae1";
export const url=new URL("../icons/tag-simple-thin.svg?v=edaf9195a5a035e2c37651454014c52c4d664546b0f9051ee87cbb43349e65cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
