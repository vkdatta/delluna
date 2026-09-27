export const name="shades_closed";
export const id="dl_8003369c2ba2ecbcf149";
export const url=new URL("../icons/shades_closed.svg?v=3b04547b57e7064c78fc8cf86905d4c92ea072b8ac267903a93b95eae2dc9efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
