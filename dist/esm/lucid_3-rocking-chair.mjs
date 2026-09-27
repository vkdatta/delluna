export const name="lucid_3-rocking-chair";
export const id="dl_64cc2fa125d24f6783ee";
export const url=new URL("../icons/lucid_3-rocking-chair.svg?v=09ba13ef9f6e4dcc4b90a97837bf03865a10c7bad8917169a7c652408024d4a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
