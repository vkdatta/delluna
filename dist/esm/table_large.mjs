export const name="table_large";
export const id="dl_973df622efe04143a8b8";
export const url=new URL("../icons/table_large.svg?v=f372733a4061a8a815fd22b5d824c2cccef9cf65dc15519fb8cfbcb2ecc2831d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
