export const name="zodiac-aquarius";
export const id="dl_8c365caf4dc34a92b568";
export const url=new URL("../icons/zodiac-aquarius.svg?v=3fedad83510e267f7b4dbd17ec44a4ce4bce03670b1f016712aa4aad09d921f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
