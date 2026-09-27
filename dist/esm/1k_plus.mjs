export const name="1k_plus";
export const id="dl_45735746db254a7463c9";
export const url=new URL("../icons/1k_plus.svg?v=fa9ee7464c0bd817a7e92f10df9c07333a0bd887533b087d41db3de265880a23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
