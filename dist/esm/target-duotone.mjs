export const name="target-duotone";
export const id="dl_bd2419770ef04106912a";
export const url=new URL("../icons/T/target-duotone.svg?v=f7e6e8cb3ff844db1ac5b65e34257651d7a55f68eb97da574ac369fcc259343f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
