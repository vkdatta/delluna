export const name="plus-square-light";
export const id="dl_d0470c474dba46b7b53a";
export const url=new URL("../icons/plus-square-light.svg?v=e61542e2ccd7ebe4dc3a970d262ceadc2beb0ccbed110f211f47f12637b5caaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
