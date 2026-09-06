export const name="plus-square-light";
export const id="dl_d0470c474dba46b7b53a";
export const url=new URL("../icons/plus-square-light.svg?v=f4b709dd8378b5e41654c0cb24a4f16712b5ea3c4fbd48c7449282b7baa7d283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
