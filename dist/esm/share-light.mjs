export const name="share-light";
export const id="dl_9e11be941061e42e6e58";
export const url=new URL("../icons/share-light.svg?v=eca7d31d46a3f1fc6ef8fb1c67aeeaaab8b1532016fe33031745c93ac04769cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
