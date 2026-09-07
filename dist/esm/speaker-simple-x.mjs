export const name="speaker-simple-x";
export const id="dl_58656158bd084a7aaa76";
export const url=new URL("../icons/S/speaker-simple-x.svg?v=d11532556504b30a24ca1089e898021a0d142745179b8d06968763a582a86ecb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
