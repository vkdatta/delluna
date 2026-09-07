export const name="storefront-duotone";
export const id="dl_70ad8bca1220412aba2d";
export const url=new URL("../icons/S/storefront-duotone.svg?v=9e755963f1672b9d45a199797cfb3479dd13517690b08f76bb013a08043cc2b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
