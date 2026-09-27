export const name="heart_smile";
export const id="dl_861e81d833db5ad80c83";
export const url=new URL("../icons/heart_smile.svg?v=91cbb4fb8688053a011853bad5e2b62522fc9af32ea88b42a5ae1868c5a66265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
