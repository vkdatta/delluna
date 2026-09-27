export const name="list-star-duotone";
export const id="dl_da4666a0d6a54fb7883d";
export const url=new URL("../icons/list-star-duotone.svg?v=c68ab2960059cfb4c5a50e7da8f0eec33278aaa1037337f543ab1929c2483595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
