export const name="shovel";
export const id="dl_bf4d331a2b8aa398bd30";
export const url=new URL("../icons/shovel.svg?v=1fb758f23def82896ec61abe6f9731502aef52b15370b6b146c93682f99a26bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
