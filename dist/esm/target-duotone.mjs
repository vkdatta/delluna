export const name="target-duotone";
export const id="dl_220f212769404804a3b8";
export const url=new URL("../icons/target-duotone.svg?v=f7e6e8cb3ff844db1ac5b65e34257651d7a55f68eb97da574ac369fcc259343f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
