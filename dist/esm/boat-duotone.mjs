export const name="boat-duotone";
export const id="dl_b3dc094813b3487b8ec0";
export const url=new URL("../icons/boat-duotone.svg?v=c986f809d456d7c656b40b49153f2c16c3a9c45c1c9d0077a7aaa01d972f3de0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
