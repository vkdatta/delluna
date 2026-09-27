export const name="envelope-open-duotone";
export const id="dl_f3f4b932790d444e8363";
export const url=new URL("../icons/envelope-open-duotone.svg?v=395452b9c63a72bc95a9e09f0c26cdc6266259ded1447ed5e118b883f9c12f53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
