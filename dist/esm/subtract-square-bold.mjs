export const name="subtract-square-bold";
export const id="dl_fa4685cd488d90e5f787";
export const url=new URL("../icons/subtract-square-bold.svg?v=05565a9644664b1cd60122b15e15087a2d752ef0241fd083f688b4252f53a271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
