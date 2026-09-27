export const name="edit";
export const id="dl_900a88c049a8b61654b6";
export const url=new URL("../icons/edit.svg?v=b160ed958fa452ec1394af47664d817314c4850e67acad47608a080be478008d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
