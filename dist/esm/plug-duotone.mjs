export const name="plug-duotone";
export const id="dl_3837523e2967470e80f7";
export const url=new URL("../icons/plug-duotone.svg?v=8da9c28a91ab1f42c749b47e62617461385b5f2fbb111e42ed13e7fa8366fb31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
