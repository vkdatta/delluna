export const name="pepper-bold";
export const id="dl_63223b5ab35a40178f24";
export const url=new URL("../icons/pepper-bold.svg?v=341edaabbf5c2356722f0798e5f4d14ddb14969b81aa6344b58bfb677736d14b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
