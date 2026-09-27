export const name="database_upload";
export const id="dl_59862b632a8985d0d615";
export const url=new URL("../icons/database_upload.svg?v=4780a01d60ecca39bbd7f37b718c03f7c1eaa871413cc90f2d90e5bcf928e8f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
