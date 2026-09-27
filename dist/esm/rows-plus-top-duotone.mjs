export const name="rows-plus-top-duotone";
export const id="dl_4177b4031cb04db3a92d";
export const url=new URL("../icons/rows-plus-top-duotone.svg?v=4047310a3d34dbd8425b0bd5deb764d7345a91edd769b45ce994efa0815d0e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
